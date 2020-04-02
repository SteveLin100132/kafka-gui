/* tslint:disable */
export interface ClientConnectedStatus {

  /**
   * Kafka位置
   */
  host: string;

  /**
   * Kafka連線用UUID
   */
  id: string;

  /**
   * Kafka客戶端連線訊息
   */
  messages?: string;

  /**
   * Kafka客戶端是否連線成功
   */
  ready: boolean;
}
