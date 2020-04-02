/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Kafka客戶端連線資料建構者
 * @CREATE Wednesday, 25th March 2020 9:50:34 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { KafkaClientOptions } from 'kafka-node';

import { KafkaOptions } from './../models/kafka-options';

/**
 * Kafka客戶端連線資料建構者
 *
 * @member host    Kafka位置
 * @member options Kafka客戶端連線配置頂
 */
export class KafkaClientBuilder {

  private host: string;
  private options: KafkaClientOptions;

  /**
   * @param options Kafka連線配置頂
   */
  constructor(options: KafkaOptions.Client) {
    this.initOptions(options);
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 屬性
   * ---------------------------------------------------------------------------
   */

  /**
   * 初始化配置頂
   *
   * @method private
   * @param options Kafka連線配置頂
   * @return 回傳物件本身
   */
  private initOptions(options: KafkaOptions.Client): KafkaClientBuilder {
    this.host = options.host;
    this.options = {
      kafkaHost: options.host,
      clientId: options.id,
      connectTimeout: 10000,
      requestTimeout: 60000,
      connectRetryOptions: {
        retries: 5,
        factor: 0,
        minTimeout: 1000,
        maxTimeout: 1000,
        randomize: false,
      },
    };

    // 如果使用SASL
    if (options.sasl) {
      this.options.sasl = {
        mechanism: 'plain',
        username: options.username,
        password: options.password,
      };
    }

    return this;
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 建構
   * ---------------------------------------------------------------------------
   */

  /**
   * 建構Kafka客戶端連線配置頂
   *
   * @method public
   * @return 回傳Kafka客戶端連線配置頂
   */
  public build(): KafkaClientOptions {
    return this.options;
  }

}
