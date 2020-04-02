/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Broker資料實體服務
 * @CREATE Wednesday, 18th March 2020 9:52:28 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

import { Broker } from './broker.entity';

/**
 * Broker資料實體服務
 */
@Injectable()
export class BorkerService extends TypeOrmCrudService<Broker> {

  /**
   * @param repo Broker實體庫
   */
  constructor(@InjectRepository(Broker) protected repo: Repository<Broker>) {
    super(repo);
  }

}
