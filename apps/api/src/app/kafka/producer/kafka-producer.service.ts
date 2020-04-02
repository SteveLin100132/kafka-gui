/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Kafka Producer服務
 * @CREATE Wednesday, 25th March 2020 10:27:42 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Injectable, Logger } from '@nestjs/common';
import { KafkaClient, HighLevelProducer, ProduceRequest } from 'kafka-node';

import { ApiResponse } from '../models/api-response';

/**
 * Kafka Producer服務
 *
 * @member logger    LOG紀錄
 * @member producers Kafka Producer儲存庫
 */
@Injectable()
export class KafkaProducerService {

  private readonly logger = new Logger(KafkaProducerService.name);
  private readonly producers = new Map<string, HighLevelProducer>();

  constructor() {}

  /**
   * ---------------------------------------------------------------------------
   * @NOTE Producer
   * ---------------------------------------------------------------------------
   */

  /**
   * 建立Kafka Producer
   *
   * @method public
   * @param id     Kafka連線用UUID
   * @param client Kafka客戶端
   * @return 回傳一個Promise，讓呼叫者可以建立Kafka Producer
   */
  public createProducer(id: string, client: KafkaClient): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.producers.get(id) !== undefined) {
        resolve();
        return;
      }

      const producer = new HighLevelProducer(client);
      this.producers.set(id, producer);
      resolve();

      producer.on('error', error => {
        this.logger.error(error);
        reject(error);
      });
    });
  }

  /**
   * 刪除特定Kafka Producer
   *
   * @method public
   * @param id Kafka客戶端連線UUID
   */
  public deleteProducer(id: string): void {
    this.producers.delete(id);
  }

  /**
   * 送出Kafka訊息
   *
   * @method public
   * @param id       Kafka連線UUID
   * @param payloads 要送出的訊息
   * @return 回傳一個Promise，讓呼叫者可以得知
   */
  public send(
    id: string,
    payloads: ProduceRequest[]
  ): Promise<ApiResponse.ProducerSendedStatus> {
    return new Promise<ApiResponse.ProducerSendedStatus>((resolve, reject) => {
      if (this.producers.get(id) === undefined) {
        resolve(new ApiResponse.ProducerSendedStatus(
          id,
          false,
          `${id} not found`
        ));
      }

      this.producers.get(id)?.send(payloads, (error, data) => {
        if (error) {
          this.logger.error(error);
          reject(new ApiResponse.ProducerSendedStatus(id, false, error));
        } else {
          resolve(new ApiResponse.ProducerSendedStatus(id, true, data));
        }
      });
    });
  }

}
