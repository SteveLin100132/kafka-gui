/* tslint:disable */
export interface Topic {

  /**
   * Kafka ISR
   */
  isr: Array<string>;

  /**
   * Kafka Leader
   */
  leader: number;

  /**
   * Kafka Borker Partition
   */
  partition: number;

  /**
   * Kafka Replicas
   */
  replicas: Array<string>;

  /**
   * Kafka Topic名稱
   */
  topic: string;
}
