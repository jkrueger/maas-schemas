/*

undefined
Response schema for profile-webhook

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Profile_ from '../../../core/profile';

export const schemaId =
  'http://maasglobal.com/maas-backend/profile/profile-webhook/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    profile?: Profile_.Profile;
    maas?: {};
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.partial({
    profile: Profile_.Profile,
    maas: t.type({}),
  }),
  (
    x,
  ): x is t.Branded<
    {
      profile?: Profile_.Profile;
      maas?: {};
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
