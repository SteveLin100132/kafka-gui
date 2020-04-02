/**
 * 專案名稱： steveylin-libs
 * 部門代號： ML8100
 * 檔案說明： Nestjs設定檔載入服務
 * @CREATE Monday, 16th March 2020 10:21:15 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import * as fs from 'fs';
import { Injectable } from '@nestjs/common';

import { Config } from './config-file';

/**
 * Nestjs設定檔載入服務
 *
 * @member configs 設定檔
 */
@Injectable()
export class NestjsConfigureService {

  private configs = new Map<string, any>();

  constructor() { }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 設定檔
   * ---------------------------------------------------------------------------
   */

  /**
   * 載入設定檔
   *
   * @method public
   * @param files 設定檔資訊
   * @return 回傳一個Promise，讓呼叫者可以載入設定檔
   */
  public load(files: Config.File[]): Promise<void> {
    return new Promise<void>(async resolve => {
      await Promise.all(files.map(async file => {
        const json = await fs.readFileSync(file.path);
        this.configs.set(file.key, json.toString());
      }));

      resolve();
    });
  }

  /**
   * 取得特定Key值的設定檔
   *
   * @method public
   * @param key 設定檔Key值
   * @return 回傳特定Key值設定檔
   */
  public get<T>(key: string): T {
    return this.configs.get(key);
  }

}
