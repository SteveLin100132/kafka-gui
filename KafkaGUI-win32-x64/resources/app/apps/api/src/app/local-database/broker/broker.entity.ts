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
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * Kafka Broker實體
 *
 * @member id       Borker流水號
 * @member name     Borker名稱
 * @member host     Borker位置
 * @member schema   Schema Registry位置
 * @member username Borker SASL帳號
 * @member password Borker SASL密碼
 */
@Entity('broker')
export class Broker {

  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @ApiProperty()
  @Column({ name: 'name', nullable: false })
  public name: string;

  @ApiProperty()
  @Column({ name: 'host', nullable: false })
  public host: string;

  @ApiProperty()
  @Column({ name: 'schema', nullable: true, default: null })
  public schema: string;

  @ApiProperty()
  @Column({ name: 'username', nullable: true, default: null })
  public username: string;

  @ApiProperty()
  @Column({ name: 'password', nullable: true, default: null })
  public password: string;

}
