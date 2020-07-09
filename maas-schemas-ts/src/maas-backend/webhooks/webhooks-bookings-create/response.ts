/*

undefined
Response schema for webhooks-bookings-create

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Booking_ from '../../../core/booking';

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
  'http://maasglobal.com/maas-backend/webhooks/webhooks-bookings-create/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    booking?: Booking_.Booking;
    debug?: {};
  } & {
    booking: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      booking: Booking_.Booking,
      debug: t.type({}),
    }),
    t.type({
      booking: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      booking?: Booking_.Booking;
      debug?: {};
    } & {
      booking: Defined;
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
