/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Client } from '../models/client';
import { ClientConnectedStatus } from '../models/client-connected-status';
import { ClientDisconnectedStatus } from '../models/client-disconnected-status';
import { Payload } from '../models/payload';
import { ProducerSendedStatus } from '../models/producer-sended-status';
import { Topic } from '../models/topic';

@Injectable({
  providedIn: 'root',
})
export class KafkaService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation kafkaControllerCreateKafkaClient
   */
  static readonly KafkaControllerCreateKafkaClientPath = '/api/kafka/client';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `kafkaControllerCreateKafkaClient()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  kafkaControllerCreateKafkaClient$Response(params: {

    body: Client
  }): Observable<StrictHttpResponse<ClientConnectedStatus>> {

    const rb = new RequestBuilder(this.rootUrl, KafkaService.KafkaControllerCreateKafkaClientPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClientConnectedStatus>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `kafkaControllerCreateKafkaClient$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  kafkaControllerCreateKafkaClient(params: {

    body: Client
  }): Observable<ClientConnectedStatus> {

    return this.kafkaControllerCreateKafkaClient$Response(params).pipe(
      map((r: StrictHttpResponse<ClientConnectedStatus>) => r.body as ClientConnectedStatus)
    );
  }

  /**
   * Path part for operation kafkaControllerDeleteKafkaClient
   */
  static readonly KafkaControllerDeleteKafkaClientPath = '/api/kafka/client/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `kafkaControllerDeleteKafkaClient()` instead.
   *
   * This method doesn't expect any request body.
   */
  kafkaControllerDeleteKafkaClient$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<ClientDisconnectedStatus>> {

    const rb = new RequestBuilder(this.rootUrl, KafkaService.KafkaControllerDeleteKafkaClientPath, 'delete');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClientDisconnectedStatus>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `kafkaControllerDeleteKafkaClient$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  kafkaControllerDeleteKafkaClient(params: {
    id: string;

  }): Observable<ClientDisconnectedStatus> {

    return this.kafkaControllerDeleteKafkaClient$Response(params).pipe(
      map((r: StrictHttpResponse<ClientDisconnectedStatus>) => r.body as ClientDisconnectedStatus)
    );
  }

  /**
   * Path part for operation kafkaControllerListTopics
   */
  static readonly KafkaControllerListTopicsPath = '/api/kafka/topic/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `kafkaControllerListTopics()` instead.
   *
   * This method doesn't expect any request body.
   */
  kafkaControllerListTopics$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<Array<Topic>>> {

    const rb = new RequestBuilder(this.rootUrl, KafkaService.KafkaControllerListTopicsPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Topic>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `kafkaControllerListTopics$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  kafkaControllerListTopics(params: {
    id: string;

  }): Observable<Array<Topic>> {

    return this.kafkaControllerListTopics$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Topic>>) => r.body as Array<Topic>)
    );
  }

  /**
   * Path part for operation kafkaControllerSend
   */
  static readonly KafkaControllerSendPath = '/api/kafka/topic/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `kafkaControllerSend()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  kafkaControllerSend$Response(params: {
    id: string;

    body: Array<Payload>
  }): Observable<StrictHttpResponse<ProducerSendedStatus>> {

    const rb = new RequestBuilder(this.rootUrl, KafkaService.KafkaControllerSendPath, 'post');
    if (params) {

      rb.path('id', params.id);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProducerSendedStatus>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `kafkaControllerSend$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  kafkaControllerSend(params: {
    id: string;

    body: Array<Payload>
  }): Observable<ProducerSendedStatus> {

    return this.kafkaControllerSend$Response(params).pipe(
      map((r: StrictHttpResponse<ProducerSendedStatus>) => r.body as ProducerSendedStatus)
    );
  }

}
