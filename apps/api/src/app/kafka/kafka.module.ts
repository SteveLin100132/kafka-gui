/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Kafka Module
 * @CREATE Wednesday, 25th March 2020 9:35:02 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Module } from '@nestjs/common';

import { KafkaController } from './kafka.controller';
import { KafkaClientService } from './client/kafka-client.service';
import { KafkaProducerService } from './producer/kafka-producer.service';
import { TopicManager } from './topic-manager/topic-manager.service';

/**
 * Kafka Module
 */
@Module({
  imports: [],
  controllers: [
    KafkaController,
  ],
  providers: [
    KafkaClientService,
    KafkaProducerService,
    TopicManager,
  ],
  exports: [
    KafkaClientService,
    KafkaProducerService,
    TopicManager,
  ],
})
export class KafkaModule {}
