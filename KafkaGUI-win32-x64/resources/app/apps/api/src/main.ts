/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Kafka GUI API
 * @CREATE Sunday, 8th March 2020 11:49:13 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

/**
 * 啟動API
 */
async function bootstrap() {
  // API設定
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.port || 3333;

  // Swagger設定
  const options = new DocumentBuilder()
    .setTitle('Kafka GUI API')
    .setVersion('1.0.0')
    .addTag('Borkers')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('explorer', app, document);

  // 匯出Swagger文件
  await fs.writeFileSync('./swagger.json', JSON.stringify(document));

  // 允許API跨站請求
  app.enableCors();

  // 啟動並監聽API
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
