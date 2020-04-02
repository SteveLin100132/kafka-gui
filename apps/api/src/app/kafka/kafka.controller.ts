/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Kafka API控制器
 * @CREATE Wednesday, 25th March 2020 10:10:24 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { ApiBody, ApiParam, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Param, Logger, Delete } from '@nestjs/common';

import { ApiResponse } from './models/api-response';
import { KafkaOptions } from './models/kafka-options';
import { KafkaClientBuilder } from './client/kafka-client.builder';
import { KafkaClientService } from './client/kafka-client.service';
import { KafkaProducerService } from './producer/kafka-producer.service';
import { TopicManager } from './topic-manager/topic-manager.service';

/**
 * Kafka API控制器
 *
 * @member logger LOG紀錄
 */
@ApiTags('kafka')
@Controller('kafka')
export class KafkaController {

  private readonly logger = new Logger(KafkaController.name);

  /**
   * @param kafkaClientService   Kafka客戶端服務
   * @param kafkaProducerService Kafka Producer服務
   * @param topicManager         Kafka Topics管理服務
   */
  constructor(
    private readonly kafkaClientService: KafkaClientService,
    private readonly kafkaProducerService: KafkaProducerService,
    private readonly topicManager: TopicManager,
  ) {}

  /**
   * ---------------------------------------------------------------------------
   * @NOTE Client
   * ---------------------------------------------------------------------------
   */

  /**
   * 建立Kafka客戶端API
   *
   * @method public
   * @param options Kafka連線配置頂
   * @return 回傳連線資訊
   */
  @Post('/client')
  @ApiBody({ type: KafkaOptions.Client })
  @ApiOkResponse({ type: ApiResponse.ClientConnectedStatus })
  public createKafkaClient(
    @Body() options: KafkaOptions.Client
  ): Promise<ApiResponse.ClientConnectedStatus> {
    const kafkaClientBuilder = new KafkaClientBuilder(options);
    return this.kafkaClientService.createKafkaClient(
      options.id,
      kafkaClientBuilder.build()
    );
  }

  /**
   * 移除特定Kafka客戶端
   *
   * @method public
   * @param params 客戶端連UUID參數
   * @return 回傳一個Promise，讓呼叫者可以得知移除特定Kafka客戶端的狀態
   */
  @Delete('/client/:id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse({ type: ApiResponse.ClientDisconnectedStatus })
  public deleteKafkaClient(
    @Param() params: { id: string },
  ): ApiResponse.ClientDisconnectedStatus {
    return this.kafkaClientService.deleteKafkaClient(params.id);
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE Producer
   * ---------------------------------------------------------------------------
   */

  /**
   * 送訊息至Kafka Producer的API
   *
   * @method public
   * @param params   客戶端連UUID參數
   * @param payloads 要送出的訊息
   * @return 回傳連線資訊
   */
  @Post('/payload/:id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiBody({ type: [KafkaOptions.Payload] })
  @ApiOkResponse({ type: ApiResponse.ProducerSendedStatus })
  public send(
    @Param() params: { id: string },
    @Body() payloads: KafkaOptions.Payload[]
  ): Promise<ApiResponse.ProducerSendedStatus> {
    return this.kafkaProducerService.send(params.id, payloads)
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE Topic
   * ---------------------------------------------------------------------------
   */

  /**
   * 列出所有Topic
   *
   * @method public
   * @param params   客戶端連UUID參數
   * @return 回傳一個Promise，讓呼叫者可以列出所有Topic
   */
  @Get('/topic/:id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse({ type: [KafkaOptions.Topic] })
  public listTopics(
    @Param() params: { id: string },
  ): Promise<KafkaOptions.Topic[]> {
    return this.topicManager.listTopics(params.id)
      .then(topics => {
        // 過濾掉開頭為'_'的Topic名稱
        topics = topics.filter(topic => !topic.topic.match(/^_/g));
        return topics;
      });
  }

  /**
   * 建立Topic
   *
   * @method public
   * @param id     客戶端連線的ID
   * @param topics Topic配置頂
   * @return 回傳一個Promise，讓呼叫者可以建立Topic
   */
  @Post('topic/:id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiBody({ type: [KafkaOptions.TopicToCreated] })
  @ApiOkResponse({ type: ApiResponse.ApiResponseStatus })
  public createTopics(
    @Param() params: { id: string },
    @Body() topics: KafkaOptions.TopicToCreated[]
  ): Promise<ApiResponse.ApiResponseStatus> {
    const createTopicRequest = topics.map(topic => topic.build());
    return this.topicManager
      .createTopics(params.id, createTopicRequest)
      .then(result => {
        return {
          id: params.id,
          status: true,
          messages: result,
        };
      })
      .catch(error => {
        return {
          id: params.id,
          status: false,
          messages: error,
        };
      });
  }

}
