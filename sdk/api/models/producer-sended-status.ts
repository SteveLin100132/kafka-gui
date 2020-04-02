/* tslint:disable */
export interface ProducerSendedStatus {

  /**
   * Kafka連線用UUID
   */
  id: string;

  /**
   * 執行動作訊息
   */
  messages?: {  };

  /**
   * 執行動作狀態
   */
  status?: boolean;
}
