/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Kafka管理員
 * @CREATE Wednesday, 25th March 2020 12:15:54 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

const Kafka = require('kafka-node');
import { KafkaClient } from 'kafka-node';

/**
 * Kafka管理員
 */
export class KafkaAdmin extends Kafka.Admin {

  /**
   * @param client Kafka客戶端
   */
  constructor(client: KafkaClient) {
    super(client);
  }

}
