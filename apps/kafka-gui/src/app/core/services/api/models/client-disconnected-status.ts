/* tslint:disable */
export interface ClientDisconnectedStatus {

  /**
   * Kafka連線用UUID
   */
  id: string;

  /**
   * Kafka客戶端移除連線訊息
   */
  messages?: string;
}
