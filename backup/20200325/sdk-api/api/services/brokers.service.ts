/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Broker } from '../models/broker';
import { CreateManyBrokerDto } from '../models/create-many-broker-dto';
import { GetManyBrokerResponseDto } from '../models/get-many-broker-response-dto';

@Injectable({
  providedIn: 'root',
})
export class BrokersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getOneBaseBrokerControllerBroker
   */
  static readonly GetOneBaseBrokerControllerBrokerPath = '/api/brokers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOneBaseBrokerControllerBroker()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOneBaseBrokerControllerBroker$Response(params: {
    id: string;

    /**
     * Selects resource fields. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#select&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    fields?: Array<string>;

    /**
     * Adds relational resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#join&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    join?: Array<string>;

    /**
     * Reset cache (if was enabled). &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#cache&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    cache?: number;

  }): Observable<StrictHttpResponse<Broker>> {

    const rb = new RequestBuilder(this.rootUrl, BrokersService.GetOneBaseBrokerControllerBrokerPath, 'get');
    if (params) {

      rb.path('id', params.id);
      rb.query('fields', params.fields);
      rb.query('join', params.join);
      rb.query('cache', params.cache);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Broker>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOneBaseBrokerControllerBroker$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOneBaseBrokerControllerBroker(params: {
    id: string;

    /**
     * Selects resource fields. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#select&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    fields?: Array<string>;

    /**
     * Adds relational resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#join&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    join?: Array<string>;

    /**
     * Reset cache (if was enabled). &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#cache&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    cache?: number;

  }): Observable<Broker> {

    return this.getOneBaseBrokerControllerBroker$Response(params).pipe(
      map((r: StrictHttpResponse<Broker>) => r.body as Broker)
    );
  }

  /**
   * Path part for operation replaceOneBaseBrokerControllerBroker
   */
  static readonly ReplaceOneBaseBrokerControllerBrokerPath = '/api/brokers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `replaceOneBaseBrokerControllerBroker()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceOneBaseBrokerControllerBroker$Response(params: {
    id: string;

    body: Broker
  }): Observable<StrictHttpResponse<Broker>> {

    const rb = new RequestBuilder(this.rootUrl, BrokersService.ReplaceOneBaseBrokerControllerBrokerPath, 'put');
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
        return r as StrictHttpResponse<Broker>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `replaceOneBaseBrokerControllerBroker$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceOneBaseBrokerControllerBroker(params: {
    id: string;

    body: Broker
  }): Observable<Broker> {

    return this.replaceOneBaseBrokerControllerBroker$Response(params).pipe(
      map((r: StrictHttpResponse<Broker>) => r.body as Broker)
    );
  }

  /**
   * Path part for operation deleteOneBaseBrokerControllerBroker
   */
  static readonly DeleteOneBaseBrokerControllerBrokerPath = '/api/brokers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOneBaseBrokerControllerBroker()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOneBaseBrokerControllerBroker$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BrokersService.DeleteOneBaseBrokerControllerBrokerPath, 'delete');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteOneBaseBrokerControllerBroker$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOneBaseBrokerControllerBroker(params: {
    id: string;

  }): Observable<void> {

    return this.deleteOneBaseBrokerControllerBroker$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateOneBaseBrokerControllerBroker
   */
  static readonly UpdateOneBaseBrokerControllerBrokerPath = '/api/brokers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOneBaseBrokerControllerBroker()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOneBaseBrokerControllerBroker$Response(params: {
    id: string;

    body: Broker
  }): Observable<StrictHttpResponse<Broker>> {

    const rb = new RequestBuilder(this.rootUrl, BrokersService.UpdateOneBaseBrokerControllerBrokerPath, 'patch');
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
        return r as StrictHttpResponse<Broker>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateOneBaseBrokerControllerBroker$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOneBaseBrokerControllerBroker(params: {
    id: string;

    body: Broker
  }): Observable<Broker> {

    return this.updateOneBaseBrokerControllerBroker$Response(params).pipe(
      map((r: StrictHttpResponse<Broker>) => r.body as Broker)
    );
  }

  /**
   * Path part for operation getManyBaseBrokerControllerBroker
   */
  static readonly GetManyBaseBrokerControllerBrokerPath = '/api/brokers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getManyBaseBrokerControllerBroker()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManyBaseBrokerControllerBroker$Response(params?: {

    /**
     * Selects resource fields. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#select&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    fields?: Array<string>;

    /**
     * Adds search condition. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#search&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    s?: string;

    /**
     * Adds filter condition. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#filter&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    filter?: Array<string>;

    /**
     * Adds OR condition. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#or&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    or?: Array<string>;

    /**
     * Adds sort by field. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#sort&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    sort?: Array<string>;

    /**
     * Adds relational resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#join&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    join?: Array<string>;

    /**
     * Limit amount of resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#limit&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    limit?: number;

    /**
     * Offset amount of resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#offset&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    offset?: number;

    /**
     * Page portion of resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#page&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    page?: number;

    /**
     * Reset cache (if was enabled). &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#cache&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    cache?: number;

  }): Observable<StrictHttpResponse<GetManyBrokerResponseDto | Array<Broker>>> {

    const rb = new RequestBuilder(this.rootUrl, BrokersService.GetManyBaseBrokerControllerBrokerPath, 'get');
    if (params) {

      rb.query('fields', params.fields);
      rb.query('s', params.s);
      rb.query('filter', params.filter);
      rb.query('or', params.or);
      rb.query('sort', params.sort);
      rb.query('join', params.join);
      rb.query('limit', params.limit);
      rb.query('offset', params.offset);
      rb.query('page', params.page);
      rb.query('cache', params.cache);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetManyBrokerResponseDto | Array<Broker>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getManyBaseBrokerControllerBroker$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getManyBaseBrokerControllerBroker(params?: {

    /**
     * Selects resource fields. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#select&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    fields?: Array<string>;

    /**
     * Adds search condition. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#search&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    s?: string;

    /**
     * Adds filter condition. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#filter&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    filter?: Array<string>;

    /**
     * Adds OR condition. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#or&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    or?: Array<string>;

    /**
     * Adds sort by field. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#sort&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    sort?: Array<string>;

    /**
     * Adds relational resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#join&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    join?: Array<string>;

    /**
     * Limit amount of resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#limit&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    limit?: number;

    /**
     * Offset amount of resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#offset&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    offset?: number;

    /**
     * Page portion of resources. &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#page&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    page?: number;

    /**
     * Reset cache (if was enabled). &lt;a href&#x3D;&quot;https://github.com/nestjsx/crud/wiki/Requests#cache&quot; target&#x3D;&quot;_blank&quot;&gt;Docs&lt;/a&gt;
     */
    cache?: number;

  }): Observable<GetManyBrokerResponseDto | Array<Broker>> {

    return this.getManyBaseBrokerControllerBroker$Response(params).pipe(
      map((r: StrictHttpResponse<GetManyBrokerResponseDto | Array<Broker>>) => r.body as GetManyBrokerResponseDto | Array<Broker>)
    );
  }

  /**
   * Path part for operation createOneBaseBrokerControllerBroker
   */
  static readonly CreateOneBaseBrokerControllerBrokerPath = '/api/brokers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createOneBaseBrokerControllerBroker()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOneBaseBrokerControllerBroker$Response(params: {

    body: Broker
  }): Observable<StrictHttpResponse<Broker>> {

    const rb = new RequestBuilder(this.rootUrl, BrokersService.CreateOneBaseBrokerControllerBrokerPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Broker>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createOneBaseBrokerControllerBroker$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOneBaseBrokerControllerBroker(params: {

    body: Broker
  }): Observable<Broker> {

    return this.createOneBaseBrokerControllerBroker$Response(params).pipe(
      map((r: StrictHttpResponse<Broker>) => r.body as Broker)
    );
  }

  /**
   * Path part for operation createManyBaseBrokerControllerBroker
   */
  static readonly CreateManyBaseBrokerControllerBrokerPath = '/api/brokers/bulk';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createManyBaseBrokerControllerBroker()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createManyBaseBrokerControllerBroker$Response(params: {

    body: CreateManyBrokerDto
  }): Observable<StrictHttpResponse<Array<Broker>>> {

    const rb = new RequestBuilder(this.rootUrl, BrokersService.CreateManyBaseBrokerControllerBrokerPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Broker>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createManyBaseBrokerControllerBroker$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createManyBaseBrokerControllerBroker(params: {

    body: CreateManyBrokerDto
  }): Observable<Array<Broker>> {

    return this.createManyBaseBrokerControllerBroker$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Broker>>) => r.body as Array<Broker>)
    );
  }

}
