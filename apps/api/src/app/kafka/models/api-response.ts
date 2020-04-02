/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： API回復資料模型
 * @CREATE Wednesday, 25th March 2020 1:56:58 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { ApiProperty } from '@nestjs/swagger';

/**
 * API回復資料模型
 */
export namespace ApiResponse {

  /**
   * Kafka建立客戶端連線回應資料模型
   *
   * @member id       Kafka連線用UUID
   * @member status   執行動作狀態
   * @member messages 執行動作訊息
   */
  export abstract class ApiResponseStatus {

    @ApiProperty({ description: 'Kafka連線用UUID' })
    public id: string;

    @ApiProperty({ description: '執行動作狀態', required: false })
    public status?: boolean;

    @ApiProperty({ description: '執行動作訊息', required: false })
    public messages?: any;

    /**
     * @param id       Kafka連線用UUID
     * @param status   執行動作狀態
     * @param messages 執行動作訊息
     */
    constructor(id: string, status?: boolean, messages?: any) {
      this.id = id;
      this.status = status;
      this.messages = messages;
    }

  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE Client
   * ---------------------------------------------------------------------------
   */

  /**
   * Kafka建立客戶端連線回應資料模型
   *
   * @member id       Kafka連線用UUID
   * @member host     Kafka位置
   * @member ready    Kafka客戶端是否連線成功
   * @member messages Kafka客戶端連線訊息
   */
  export class ClientConnectedStatus {

    @ApiProperty({ description: 'Kafka連線用UUID' })
    public id: string;

    @ApiProperty({ description: 'Kafka位置' })
    public host: string;

    @ApiProperty({ description: 'Kafka客戶端是否連線成功' })
    public ready: boolean;

    @ApiProperty({ description: 'Kafka客戶端連線訊息', required: false })
    public messages?: string;

    /**
     * @param id       Kafka連線用UUID
     * @param host     Kafka位置
     * @param ready    Kafka客戶端是否連線成功
     * @param messages Kafka客戶端連線訊息
     */
    constructor(id: string, host: string, ready: boolean, messages?: string) {
      this.id = id;
      this.host = host;
      this.ready = ready;
      this.messages = messages;
    }

  }

  /**
   * Kafka移除客戶端連線回應資料模型
   *
   * @member id       Kafka連線用UUID
   * @member messages Kafka客戶端移除連線訊息
   */
  export class ClientDisconnectedStatus {

    @ApiProperty({ description: 'Kafka連線用UUID' })
    public id: string;

    @ApiProperty({ description: 'Kafka客戶端移除連線訊息', required: false })
    public messages?: string;

    /**
     * @param id       Kafka連線用UUID
     * @param messages Kafka客戶端移除連線訊息
     */
    constructor(id: string, messages?: string) {
      this.id = id;
      this.messages = messages;
    }

  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE Producer
   * ---------------------------------------------------------------------------
   */

  /**
   * Kafka Producer送出訊息後的狀態回應
   */
  export class ProducerSendedStatus extends ApiResponseStatus {

    /**
     * @param id       Kafka連線用UUID
     * @param status   執行動作狀態
     * @param messages 執行動作訊息
     */
    constructor(id: string, status?: boolean, messages?: any) {
      super(id, status, messages);
    }

  }

}
