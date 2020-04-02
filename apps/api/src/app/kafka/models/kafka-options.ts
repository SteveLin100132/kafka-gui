/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Kafka配置頂
 * @CREATE Wednesday, 25th March 2020 10:01:32 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { ApiProperty } from '@nestjs/swagger';
import { ProduceRequest, CreateTopicRequest } from 'kafka-node';

/**
 * Kafka配置頂
 */
export namespace KafkaOptions {

  /**
   * 客戶端連線配置頂
   *
   * @member id       Kafka連線用UUID
   * @member host     Kafka位置
   * @member schema   Schema Registry位置
   * @member sasl     使用SASL
   * @member username SASL帳號
   * @member password 密碼
   */
  export class Client {

    @ApiProperty({ description: 'Kafka連線用UUID' })
    public id: string;

    @ApiProperty({ description: 'Kafka位置' })
    public host: string;

    @ApiProperty({ description: 'Schema Registry位置', required: false })
    public schema?: string;

    @ApiProperty({ description: '使用SASL', required: false })
    public sasl?: boolean;

    @ApiProperty({ description: 'SASL帳號', required: false })
    public username?: string;

    @ApiProperty({ description: 'SASL密碼', required: false })
    public password?: string;

  }

  /**
   * Producer訊息模型
   *
   * @member topic      要送往的Topic
   * @member messages   訊息的內容
   * @member key        訊息的Key值
   * @member partition  Kafka Partition
   * @member attributes 訊息的狀態
   */
  export class Payload implements ProduceRequest {

    @ApiProperty({ description: '要送往的Topic' })
    public topic: string;

    @ApiProperty({ description: '訊息的內容' })
    public messages: any;

    @ApiProperty({ description: '訊息的Key值', required: false })
    public key?: string | Buffer;

    @ApiProperty({ description: 'Kafka Partition', required: false })
    public partition?: number;

    @ApiProperty({ description: '訊息的狀態', required: false })
    public attributes?: number;

  }

  /**
   * Topic資料模型
   *
   * @member topic     Kafka Topic名稱
   * @member partition Kafka Borker Partition
   * @member leader    Kafka Leader
   * @member replicas  Kafka Replicas
   * @member isr       Kafka ISR
   */
  export class Topic {

    @ApiProperty({ description: 'Kafka Topic名稱' })
    public topic: string;

    @ApiProperty({ description: 'Kafka Borker Partition' })
    public partition: number;

    @ApiProperty({ description: 'Kafka Leader' })
    public leader: number;

    @ApiProperty({ description: 'Kafka Replicas' })
    public replicas: number[];

    @ApiProperty({ description: 'Kafka ISR' })
    public isr: number[];

  }

/**
 * Topic資料模型
 *
 * @member topic             Kafka Topic名稱
 * @member partitions        Kafka Borker Partition
 * @member replicationFactor Kafka Replicas
 */
  export class TopicToCreated {

    @ApiProperty({ description: 'Kafka Topic名稱' })
    public topic: string;

    @ApiProperty({ description: 'Kafka Borker Partition', required: false })
    public partitions?: number;

    @ApiProperty({ description: 'Kafka Replicas', required: false })
    public replicationFactor?: number;

    /**
     * @param topic             Kafka Topic名稱
     * @param partitions        Kafka Borker Partition
     * @param replicationFactor Kafka Replicas
     */
    constructor(topic: string, partitions: number, replicationFactor: number) {
      this.topic = topic;
      this.partitions = partitions;
      this.replicationFactor = replicationFactor;
    }

    /**
     * 建立Kafka Topic配置頂
     *
     * @method public
     * @return 回傳Kafka Topic配置頂
     */
    public build(): CreateTopicRequest {
      return {
        topic: this.topic,
        partitions: this.partitions,
        replicationFactor: this.replicationFactor
      };
    }

  }

}
