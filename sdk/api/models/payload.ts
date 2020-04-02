/* tslint:disable */
export interface Payload {

  /**
   * 訊息的狀態
   */
  attributes?: number;

  /**
   * 訊息的Key值
   */
  key?: {  };

  /**
   * 訊息的內容
   */
  messages: {  };

  /**
   * Kafka Partition
   */
  partition?: number;

  /**
   * 要送往的Topic
   */
  topic: string;
}
