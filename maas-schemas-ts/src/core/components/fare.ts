/*

undefined
A fare/price as billed to the user in WMPs or in tokens

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Common_ from './common';

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

export const schemaId = 'http://maasglobal.com/core/components/fare.json';

// TokenId
// The purpose of this remains a mystery
export type TokenId = t.Branded<string, TokenIdBrand>;
export const TokenId = t.brand(
  t.string,
  (x): x is t.Branded<string, TokenIdBrand> =>
    typeof x !== 'string' || x.match(RegExp('^[a-z]+(-[a-z]+)*-[a-z0-9_]+$')) !== null,
  'TokenId',
);
export interface TokenIdBrand {
  readonly TokenId: unique symbol;
}

// Fare
// The default export. More information at the top.
export type Fare = t.Branded<
  {
    amount?: number | null;
    currency?: Common_.MetaCurrency;
    tokenId?: TokenId;
    originalAmount?: number | null;
    productionAmount?: number | null;
    type?: string & ('charge' | 'refund');
  } & {
    amount: Defined;
    currency: Defined;
  },
  FareBrand
>;
export const Fare = t.brand(
  t.intersection([
    t.partial({
      amount: t.union([t.number, t.null]),
      currency: Common_.MetaCurrency,
      tokenId: TokenId,
      originalAmount: t.union([t.number, t.null]),
      productionAmount: t.union([t.number, t.null]),
      type: t.intersection([
        t.string,
        t.union([t.literal('charge'), t.literal('refund')]),
      ]),
    }),
    t.type({
      amount: Defined,
      currency: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      amount?: number | null;
      currency?: Common_.MetaCurrency;
      tokenId?: TokenId;
      originalAmount?: number | null;
      productionAmount?: number | null;
      type?: string & ('charge' | 'refund');
    } & {
      amount: Defined;
      currency: Defined;
    },
    FareBrand
  > => true,
  'Fare',
);
export interface FareBrand {
  readonly Fare: unique symbol;
}

export default Fare;

// Success
