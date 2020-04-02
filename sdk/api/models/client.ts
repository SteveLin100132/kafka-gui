/* tslint:disable */
export interface Client {

  /**
   * Kafka位置
   */
  host: string;

  /**
   * Kafka連線用UUID
   */
  id: string;

  /**
   * Schema Registry位置
   */
  schema?: string;
}
