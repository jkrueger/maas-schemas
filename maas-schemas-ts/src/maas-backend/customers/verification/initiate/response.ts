/*

undefined
MaaS customer verification initiate

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as VerificationObject_ from '../verification-object';

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
  'http://maasglobal.com/maas-backend/customers/verification/initiate/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    customer?: {
      verification?: Array<VerificationObject_.Verification>;
    } & {
      verification: Defined;
    };
  } & {
    customer: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      customer: t.intersection([
        t.partial({
          verification: t.array(VerificationObject_.Verification),
        }),
        t.type({
          verification: Defined,
        }),
      ]),
    }),
    t.type({
      customer: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customer?: {
        verification?: Array<VerificationObject_.Verification>;
      } & {
        verification: Defined;
      };
    } & {
      customer: Defined;
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
