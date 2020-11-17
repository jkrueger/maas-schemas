/*

undefined
MaaS subscription schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Contact_ from './contact';
import * as PointCost_ from '../../core/components/point-cost';
import * as Region_ from '../../core/region';
import * as SubscriptionAddress_ from './subscriptionAddress';
import * as SubscriptionChangeState_ from '../../core/components/subscriptionChangeState';
import * as Units_ from '../../core/components/units';
import * as Cost_ from '../../core/components/cost';

export type Defined = {} | null;
export class DefinedType extends t.Type<Defined> {
  readonly _tag: 'DefinedType' = 'DefinedType';
  constructor() {
    super(
      'defined',
      (u): u is Defined => typeof u !== 'undefined',
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity,
    );
  }
}
export interface DefinedC extends DefinedType {}
export const Defined: DefinedC = new DefinedType();

export const schemaId =
  'http://maasglobal.com/maas-backend/subscriptions/subscription.json';

// SubscriptionItemId
// Identifier for matching the plans (Chargebee compat.)
export type SubscriptionItemId = t.Branded<string, SubscriptionItemIdBrand>;
export type SubscriptionItemIdC = t.BrandC<t.StringC, SubscriptionItemIdBrand>;
export const SubscriptionItemId: SubscriptionItemIdC = t.brand(
  t.string,
  (x): x is t.Branded<string, SubscriptionItemIdBrand> =>
    typeof x !== 'string' || x.match(RegExp('^[^\\s\\/]{1,50}$')) !== null,
  'SubscriptionItemId',
);
export interface SubscriptionItemIdBrand {
  readonly SubscriptionItemId: unique symbol;
}

// Price
// The purpose of this remains a mystery
export type Price = t.Branded<Cost_.Cost, PriceBrand>;
export type PriceC = t.BrandC<typeof Cost_.Cost, PriceBrand>;
export const Price: PriceC = t.brand(
  Cost_.Cost,
  (x): x is t.Branded<Cost_.Cost, PriceBrand> => true,
  'Price',
);
export interface PriceBrand {
  readonly Price: unique symbol;
}

// Plan
// Customer subscription plan
export type Plan = t.Branded<
  {
    id?: SubscriptionItemId;
    name?: string;
    description?: string;
    price?: Price;
  } & {
    id: Defined;
  },
  PlanBrand
>;
export type PlanC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: typeof SubscriptionItemId;
        name: t.StringC;
        description: t.StringC;
        price: typeof Price;
      }>,
      t.TypeC<{
        id: typeof Defined;
      }>,
    ]
  >,
  PlanBrand
>;
export const Plan: PlanC = t.brand(
  t.intersection([
    t.partial({
      id: SubscriptionItemId,
      name: t.string,
      description: t.string,
      price: Price,
    }),
    t.type({
      id: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: SubscriptionItemId;
      name?: string;
      description?: string;
      price?: Price;
    } & {
      id: Defined;
    },
    PlanBrand
  > => true,
  'Plan',
);
export interface PlanBrand {
  readonly Plan: unique symbol;
}

// Addon
// Customer subscription add-ons
export type Addon = t.Branded<
  {
    id?: SubscriptionItemId;
    name?: string;
    description?: string;
    quantity?: number;
    unitPrice?: Price;
    image?: Units_.Url;
    virtualCardIssue?: {
      providerName?: string;
    };
  } & {
    id: Defined;
    quantity: Defined;
  },
  AddonBrand
>;
export type AddonC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: typeof SubscriptionItemId;
        name: t.StringC;
        description: t.StringC;
        quantity: t.NumberC;
        unitPrice: typeof Price;
        image: typeof Units_.Url;
        virtualCardIssue: t.PartialC<{
          providerName: t.StringC;
        }>;
      }>,
      t.TypeC<{
        id: typeof Defined;
        quantity: typeof Defined;
      }>,
    ]
  >,
  AddonBrand
>;
export const Addon: AddonC = t.brand(
  t.intersection([
    t.partial({
      id: SubscriptionItemId,
      name: t.string,
      description: t.string,
      quantity: t.number,
      unitPrice: Price,
      image: Units_.Url,
      virtualCardIssue: t.partial({
        providerName: t.string,
      }),
    }),
    t.type({
      id: Defined,
      quantity: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: SubscriptionItemId;
      name?: string;
      description?: string;
      quantity?: number;
      unitPrice?: Price;
      image?: Units_.Url;
      virtualCardIssue?: {
        providerName?: string;
      };
    } & {
      id: Defined;
      quantity: Defined;
    },
    AddonBrand
  > => true,
  'Addon',
);
export interface AddonBrand {
  readonly Addon: unique symbol;
}

// Coupon
// Additional coupon that may provide discounts
export type Coupon = t.Branded<
  {
    id?: SubscriptionItemId;
    name?: string;
    description?: string;
  } & {
    id: Defined;
  },
  CouponBrand
>;
export type CouponC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: typeof SubscriptionItemId;
        name: t.StringC;
        description: t.StringC;
      }>,
      t.TypeC<{
        id: typeof Defined;
      }>,
    ]
  >,
  CouponBrand
>;
export const Coupon: CouponC = t.brand(
  t.intersection([
    t.partial({
      id: SubscriptionItemId,
      name: t.string,
      description: t.string,
    }),
    t.type({
      id: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: SubscriptionItemId;
      name?: string;
      description?: string;
    } & {
      id: Defined;
    },
    CouponBrand
  > => true,
  'Coupon',
);
export interface CouponBrand {
  readonly Coupon: unique symbol;
}

// Terms
// Terms related to this subscription
export type Terms = t.Branded<
  {
    activated?: Units_.Time;
    modified?: Units_.Time;
    validity?: {
      startTime?: Units_.Time;
      endTime?: Units_.Time;
    } & {
      startTime: Defined;
      endTime: Defined;
    };
    scheduledChanges?: boolean;
  } & {
    validity: Defined;
  },
  TermsBrand
>;
export type TermsC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        activated: typeof Units_.Time;
        modified: typeof Units_.Time;
        validity: t.IntersectionC<
          [
            t.PartialC<{
              startTime: typeof Units_.Time;
              endTime: typeof Units_.Time;
            }>,
            t.TypeC<{
              startTime: typeof Defined;
              endTime: typeof Defined;
            }>,
          ]
        >;
        scheduledChanges: t.BooleanC;
      }>,
      t.TypeC<{
        validity: typeof Defined;
      }>,
    ]
  >,
  TermsBrand
>;
export const Terms: TermsC = t.brand(
  t.intersection([
    t.partial({
      activated: Units_.Time,
      modified: Units_.Time,
      validity: t.intersection([
        t.partial({
          startTime: Units_.Time,
          endTime: Units_.Time,
        }),
        t.type({
          startTime: Defined,
          endTime: Defined,
        }),
      ]),
      scheduledChanges: t.boolean,
    }),
    t.type({
      validity: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      activated?: Units_.Time;
      modified?: Units_.Time;
      validity?: {
        startTime?: Units_.Time;
        endTime?: Units_.Time;
      } & {
        startTime: Defined;
        endTime: Defined;
      };
      scheduledChanges?: boolean;
    } & {
      validity: Defined;
    },
    TermsBrand
  > => true,
  'Terms',
);
export interface TermsBrand {
  readonly Terms: unique symbol;
}

// SubscriptionBase
// The purpose of this remains a mystery
export type SubscriptionBase = t.Branded<
  {
    id?: Contact_.IdentityId;
    customerId?: Contact_.IdentityId;
    plan?: Plan;
    addons?: Array<Addon>;
    coupons?: Array<Coupon>;
    terms?: Terms;
    pointCost?: PointCost_.PointCost;
    region?: Region_.Region;
    shippingAddress?: SubscriptionAddress_.SubscriptionAddress;
    availability?: {};
    name?: string;
    description?: string;
    meta?: {};
    level?: number;
    wmpGrant?: number;
    active?: boolean;
    hidden?: boolean;
    selectable?: boolean;
    topUpId?: string;
    changeState?: SubscriptionChangeState_.SubscriptionChangeState;
  },
  SubscriptionBaseBrand
>;
export type SubscriptionBaseC = t.BrandC<
  t.PartialC<{
    id: typeof Contact_.IdentityId;
    customerId: typeof Contact_.IdentityId;
    plan: typeof Plan;
    addons: t.ArrayC<typeof Addon>;
    coupons: t.ArrayC<typeof Coupon>;
    terms: typeof Terms;
    pointCost: typeof PointCost_.PointCost;
    region: typeof Region_.Region;
    shippingAddress: typeof SubscriptionAddress_.SubscriptionAddress;
    availability: t.TypeC<{}>;
    name: t.StringC;
    description: t.StringC;
    meta: t.TypeC<{}>;
    level: t.NumberC;
    wmpGrant: t.NumberC;
    active: t.BooleanC;
    hidden: t.BooleanC;
    selectable: t.BooleanC;
    topUpId: t.StringC;
    changeState: typeof SubscriptionChangeState_.SubscriptionChangeState;
  }>,
  SubscriptionBaseBrand
>;
export const SubscriptionBase: SubscriptionBaseC = t.brand(
  t.partial({
    id: Contact_.IdentityId,
    customerId: Contact_.IdentityId,
    plan: Plan,
    addons: t.array(Addon),
    coupons: t.array(Coupon),
    terms: Terms,
    pointCost: PointCost_.PointCost,
    region: Region_.Region,
    shippingAddress: SubscriptionAddress_.SubscriptionAddress,
    availability: t.type({}),
    name: t.string,
    description: t.string,
    meta: t.type({}),
    level: t.number,
    wmpGrant: t.number,
    active: t.boolean,
    hidden: t.boolean,
    selectable: t.boolean,
    topUpId: t.string,
    changeState: SubscriptionChangeState_.SubscriptionChangeState,
  }),
  (
    x,
  ): x is t.Branded<
    {
      id?: Contact_.IdentityId;
      customerId?: Contact_.IdentityId;
      plan?: Plan;
      addons?: Array<Addon>;
      coupons?: Array<Coupon>;
      terms?: Terms;
      pointCost?: PointCost_.PointCost;
      region?: Region_.Region;
      shippingAddress?: SubscriptionAddress_.SubscriptionAddress;
      availability?: {};
      name?: string;
      description?: string;
      meta?: {};
      level?: number;
      wmpGrant?: number;
      active?: boolean;
      hidden?: boolean;
      selectable?: boolean;
      topUpId?: string;
      changeState?: SubscriptionChangeState_.SubscriptionChangeState;
    },
    SubscriptionBaseBrand
  > => true,
  'SubscriptionBase',
);
export interface SubscriptionBaseBrand {
  readonly SubscriptionBase: unique symbol;
}

// Subscription
// The purpose of this remains a mystery
export type Subscription = t.Branded<
  SubscriptionBase & {
    plan: Defined;
    addons: Defined;
    coupons: Defined;
    changeState: Defined;
  },
  SubscriptionBrand
>;
export type SubscriptionC = t.BrandC<
  t.IntersectionC<
    [
      typeof SubscriptionBase,
      t.TypeC<{
        plan: typeof Defined;
        addons: typeof Defined;
        coupons: typeof Defined;
        changeState: typeof Defined;
      }>,
    ]
  >,
  SubscriptionBrand
>;
export const Subscription: SubscriptionC = t.brand(
  t.intersection([
    SubscriptionBase,
    t.type({
      plan: Defined,
      addons: Defined,
      coupons: Defined,
      changeState: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    SubscriptionBase & {
      plan: Defined;
      addons: Defined;
      coupons: Defined;
      changeState: Defined;
    },
    SubscriptionBrand
  > => true,
  'Subscription',
);
export interface SubscriptionBrand {
  readonly Subscription: unique symbol;
}

// SubscriptionCreatePayload
// The purpose of this remains a mystery
export type SubscriptionCreatePayload = t.Branded<
  SubscriptionBase & {
    plan: Defined;
    addons: Defined;
  },
  SubscriptionCreatePayloadBrand
>;
export type SubscriptionCreatePayloadC = t.BrandC<
  t.IntersectionC<
    [
      typeof SubscriptionBase,
      t.TypeC<{
        plan: typeof Defined;
        addons: typeof Defined;
      }>,
    ]
  >,
  SubscriptionCreatePayloadBrand
>;
export const SubscriptionCreatePayload: SubscriptionCreatePayloadC = t.brand(
  t.intersection([
    SubscriptionBase,
    t.type({
      plan: Defined,
      addons: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    SubscriptionBase & {
      plan: Defined;
      addons: Defined;
    },
    SubscriptionCreatePayloadBrand
  > => true,
  'SubscriptionCreatePayload',
);
export interface SubscriptionCreatePayloadBrand {
  readonly SubscriptionCreatePayload: unique symbol;
}

// SubscriptionUpdatePayload
// The purpose of this remains a mystery
export type SubscriptionUpdatePayload = t.Branded<
  SubscriptionBase & {},
  SubscriptionUpdatePayloadBrand
>;
export type SubscriptionUpdatePayloadC = t.BrandC<
  t.IntersectionC<[typeof SubscriptionBase, t.TypeC<{}>]>,
  SubscriptionUpdatePayloadBrand
>;
export const SubscriptionUpdatePayload: SubscriptionUpdatePayloadC = t.brand(
  t.intersection([SubscriptionBase, t.type({})]),
  (x): x is t.Branded<SubscriptionBase & {}, SubscriptionUpdatePayloadBrand> => true,
  'SubscriptionUpdatePayload',
);
export interface SubscriptionUpdatePayloadBrand {
  readonly SubscriptionUpdatePayload: unique symbol;
}

// Success
