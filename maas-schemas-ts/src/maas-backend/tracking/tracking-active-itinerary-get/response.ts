/*

undefined
Response schema for getting active itinerary tracking object

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId =
  'http://maasglobal.com/maas-backend/tracking/tracking-active-itinerary-get/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<unknown, ResponseBrand>;
export const Response = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, ResponseBrand> => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success
