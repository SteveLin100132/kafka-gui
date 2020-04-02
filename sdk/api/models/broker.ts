/* tslint:disable */
export interface Broker {

  /**
   * Borker位置
   */
  host: string;

  /**
   * Borker流水號
   */
  id: string;

  /**
   * Borker名稱
   */
  name: string;

  /**
   * Borker SASL密碼
   */
  password: string;

  /**
   * Borker是否啟用SASL
   */
  sasl: boolean;

  /**
   * Schema Registry位置
   */
  schema: string;

  /**
   * Borker SASL帳號
   */
  username: string;
}
