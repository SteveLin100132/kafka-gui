/* tslint:disable */
import { Broker } from './broker';
export interface GetManyBrokerResponseDto {
  count: number;
  data: Array<Broker>;
  page: number;
  pageCount: number;
  total: number;
}
