/**
 * 專案名稱： steveylin-libs
 * 部門代號： ML8100
 * 檔案說明： Nestjs設定檔載入Module
 * @CREATE Monday, 16th March 2020 10:21:15 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Module, Global } from '@nestjs/common';
import { DynamicModule } from '@nestjs/common/interfaces';

import { Config } from './config-file';
import { NestjsConfigureService } from './nestjs-configure.service';

/**
 * Nestjs設定檔載入Module
 */
@Module({
  providers: [
    NestjsConfigureService
  ],
  exports: [
    NestjsConfigureService
  ],
})
export class NestjsConfigureModule {

  /**
   * 預載設定檔
   *
   * @method public
   * @param configFiles 設定檔資訊
   * @return 回傳Module動態設定
   */
  public static forRoot(configFiles: Config.File[]): DynamicModule {
    return {
      global: true,
      module: NestjsConfigureModule,
      providers: [
        NestjsConfigureService,
        {
          provide: 'CONFIG',
          inject: [NestjsConfigureService],
          useFactory: (configService: NestjsConfigureService) => {
            return configService.load(configFiles);
          }
        }
      ],
      exports: [
        NestjsConfigureService,
      ]
    };
  }

}
