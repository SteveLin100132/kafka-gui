/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Kafka客戶端服務
 * @CREATE Wednesday, 25th March 2020 9:37:37 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Injectable, Logger } from '@nestjs/common';
import { KafkaClient, KafkaClientOptions } from 'kafka-node';

import { ApiResponse } from './../models/api-response';
import { KafkaAdmin } from '../admin/kafka-admin';
import { KafkaProducerService } from '../producer/kafka-producer.service';

/**
 * Kafka客戶端服務
 *
 * @member logger  LOG紀錄
 * @member clients Kafka客戶端儲存庫
 */
@Injectable()
export class KafkaClientService {

  private readonly logger = new Logger(KafkaClientService.name);
  private readonly clients = new Map<string, KafkaClient>();
  private readonly admins = new Map<string, KafkaAdmin>();

  /**
   * @param kafkaProducerService Kafka Producer服務
   */
  constructor(private readonly kafkaProducerService: KafkaProducerService) {}

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 屬性
   * ---------------------------------------------------------------------------
   */

  /**
   * 取得客戶端連線
   *
   * @method public
   * @param id 客戶端連線UUID
   * @return 回傳客戶端連線
   */
  public getClient(id: string): KafkaClient {
    return this.clients.get(id);
  }

  /**
   * 取得客戶端管理員
   *
   * @method public
   * @param id 客戶端連線UUID
   * @return 回傳客戶端管理員
   */
  public getAdmin(id: string): KafkaAdmin {
    return this.admins.get(id);
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 客戶端
   * ---------------------------------------------------------------------------
   */

  /**
   * 建立一Kafka客戶端連線
   *
   * @method public
   * @param id      Kafka連線用UUID
   * @param options Kafka客戶端連線配置頂
   * @return 回傳連線資訊
   */
  public createKafkaClient(
    id: string,
    options: KafkaClientOptions
  ): Promise<ApiResponse.ClientConnectedStatus> {
    return new Promise<ApiResponse.ClientConnectedStatus>((resolve, reject) => {
      try {
        const client = new KafkaClient(options);

        // 當客戶端連線完畢
        client.on('ready', async () => {
          // 一般客戶端
          if (this.clients.get(id) === undefined) {
            this.clients.set(id, client);
          }

          // 管理員客戶端
          if (this.admins.get(id) === undefined) {
            const admin = new KafkaAdmin(client);
            this.admins.set(id, admin);
          }

          // 創建Producer
          await this.kafkaProducerService.createProducer(id, client);

          this.logger.log(`Kafka client ${id} connect ready`);
          resolve(
            new ApiResponse.ClientConnectedStatus(
              id,
              options.kafkaHost,
              true,
              'Kafka client connect ready'
            )
          );
        });

        // 當客戶端連線發生錯誤
        client.on('error', error => {
          this.logger.error(error);
          resolve(
            new ApiResponse.ClientConnectedStatus(
              id,
              options.kafkaHost,
              false,
              error
            )
          );
        });
      } catch (error) {
        resolve(
          new ApiResponse.ClientConnectedStatus(
            id,
            options.kafkaHost,
            true,
            error
          )
        );
      }
    });
  }

  /**
   * 移除特定Kafka客戶端
   *
   * @method public
   * @param id Kafka連線UUID
   * @return 回傳一個Promise，讓呼叫者可以得知移除特定Kafka客戶端的狀態
   */
  public deleteKafkaClient(
    id: string
  ): ApiResponse.ClientDisconnectedStatus {
    this.clients.delete(id);
    this.admins.delete(id);
    this.kafkaProducerService.deleteProducer(id);
    return new ApiResponse.ClientDisconnectedStatus(
      id,
      'Kafka client disconnect'
    );
  }

}
