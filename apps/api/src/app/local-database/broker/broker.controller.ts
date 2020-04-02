/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Broker資料實體控制器
 * @CREATE Wednesday, 18th March 2020 9:58:05 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from "@nestjsx/crud";
import { Controller } from '@nestjs/common';

import { Broker } from './broker.entity';
import { BorkerService } from './borker.service';

/**
 * Broker資料實體控制器
 */
@ApiTags('brokers')
@Crud({
  model: { type: Broker },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
})
@Controller('brokers')
export class BrokerController implements CrudController<Broker> {

  /**
   * @param service Broker資料實體服務
   */
  constructor(public service: BorkerService) {}

}
