/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Kafka Broker實體
 * @CREATE Wednesday, 18th March 2020 9:48:30 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

/**
 * Kafka Broker實體
 *
 * @member id       Borker流水號
 * @member name     Borker名稱
 * @member host     Borker位置
 * @member schema   Schema Registry位置
 * @member sasl     Borker是否啟用SASL
 * @member username Borker SASL帳號
 * @member password Borker SASL密碼
 */
@Entity('broker')
export class Broker {

  @ApiProperty({ description: 'Borker流水號' })
  @PrimaryColumn({ name: 'id', type: 'uuid' })
  public id: string;

  @ApiProperty({ description: 'Borker名稱' })
  @Column({ name: 'name', nullable: false })
  public name: string;

  @ApiProperty({ description: 'Borker位置' })
  @Column({ name: 'host', nullable: false })
  public host: string;

  @ApiProperty({ description: 'Schema Registry位置' })
  @Column({ name: 'schema', nullable: true, default: null })
  public schema: string;

  @ApiProperty({ description: 'Borker是否啟用SASL' })
  @Column({ name: 'sasl', nullable: true, default: false })
  public sasl: boolean;

  @ApiProperty({ description: 'Borker SASL帳號' })
  @Column({ name: 'username', nullable: true, default: null })
  public username: string;

  @ApiProperty({ description: 'Borker SASL密碼' })
  @Column({ name: 'password', nullable: true, default: null })
  public password: string;

  constructor() {}

  /**
   * 新增一筆資料前將ID插入UUID
   *
   * @method private
   */
  @BeforeInsert()
  private insertId(): void {
    this.id = uuidv4();
  }

}
