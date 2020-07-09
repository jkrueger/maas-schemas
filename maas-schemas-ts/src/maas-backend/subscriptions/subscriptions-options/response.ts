/*

undefined
Response schema for subscriptions-options

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as SubscriptionOption_ from '../subscriptionOption';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId =
  'http://maasglobal.com/maas-backend/subscriptions/subscriptions-options/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    options?: Array<SubscriptionOption_.SubscriptionOption>;
    debug?: {};
  } & {
    options: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      options: t.array(SubscriptionOption_.SubscriptionOption),
      debug: t.type({}),
    }),
    t.type({
      options: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      options?: Array<SubscriptionOption_.SubscriptionOption>;
      debug?: {};
    } & {
      options: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success
