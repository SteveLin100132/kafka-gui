/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Kafka Topics管理服務
 * @CREATE Wednesday, 25th March 2020 11:49:08 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CreateTopicRequest, CreateTopicResponse } from 'kafka-node';
import { Injectable, Logger } from '@nestjs/common';
import { Subject } from 'rxjs';

import { KafkaOptions } from './../models/kafka-options';
import { KafkaClientService } from '../client/kafka-client.service';

/**
 * Kafka Topics管理服務
 *
 * @member logger LOG紀錄
 */
@Injectable()
export class TopicManager {

  private readonly logger = new Logger(TopicManager.name);
  private readonly topicSub = new Subject<KafkaOptions.Topic[]>();

  /**
   * @param kafkaClientService Kafka客戶端服務
   */
  constructor(private readonly kafkaClientService: KafkaClientService) {}

  /**
   * ---------------------------------------------------------------------------
   * @NOTE Topic
   * ---------------------------------------------------------------------------
   */

  /**
   * 列出所有Topic
   *
   * @method public
   * @param id 客戶端連線的ID
   * @return 回傳一個Promise，讓呼叫者可以列出所有Topic
   */
  public listTopics(id: string): Promise<KafkaOptions.Topic[]> {
    return new Promise<KafkaOptions.Topic[]>((resolve, reject) => {
      const admin = this.kafkaClientService.getAdmin(id);
      const topics: KafkaOptions.Topic[] = [];

      if (admin === undefined) {
        resolve(topics);
        return;
      }

      admin.listTopics((error, res) => {
        if (error) {
          this.logger.error(error);
          reject(error);
        } else {
          Object.keys(res[1].metadata).forEach(key => {
            topics.push(res[1].metadata[key][0]);
          });
          resolve(topics);
        }
      });
    });
  }

  /**
   * 建立Topic
   *
   * @method public
   * @param id     客戶端連線的ID
   * @param topics Topic配置頂
   * @return 回傳一個Promise，讓呼叫者可以建立Topic
   */
  public createTopics(
    id: string,
    topics: CreateTopicRequest[]
  ): Promise<CreateTopicResponse[]> {
    return new Promise<CreateTopicResponse[]>((resolve, reject) => {
      const client = this.kafkaClientService.getClient(id);
      client.createTopics(topics, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

}
