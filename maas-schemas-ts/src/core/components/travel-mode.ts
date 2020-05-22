/*

undefined
Transfer modes used for MaaS internal services

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/components/travel-mode.json';

// WaitingMode
// A mode that only involves waiting in the current location
export type WaitingMode = t.Branded<string & 'WAIT', WaitingModeBrand>;
export const WaitingMode = t.brand(
  t.intersection([t.string, t.literal('WAIT')]),
  (x): x is t.Branded<string & 'WAIT', WaitingModeBrand> => true,
  'WaitingMode',
);
export interface WaitingModeBrand {
  readonly WaitingMode: unique symbol;
}

// TransferMode
// A mode that involves changing transports
export type TransferMode = t.Branded<
  string & ('LEG_SWITCH' | 'TRANSFER'),
  TransferModeBrand
>;
export const TransferMode = t.brand(
  t.intersection([t.string, t.union([t.literal('LEG_SWITCH'), t.literal('TRANSFER')])]),
  (x): x is t.Branded<string & ('LEG_SWITCH' | 'TRANSFER'), TransferModeBrand> => true,
  'TransferMode',
);
export interface TransferModeBrand {
  readonly TransferMode: unique symbol;
}

// PersonalMode
// A mode that involves using your personal vehicle or legs
export type PersonalMode = t.Branded<
  string &
    ('BICYCLE' | 'CAR' | 'SCOOTER' | 'SHARED_BICYCLE' | 'WALK' | 'SHARED_E_BICYCLE'),
  PersonalModeBrand
>;
export const PersonalMode = t.brand(
  t.intersection([
    t.string,
    t.union([
      t.literal('BICYCLE'),
      t.literal('CAR'),
      t.literal('SCOOTER'),
      t.literal('SHARED_BICYCLE'),
      t.literal('WALK'),
      t.literal('SHARED_E_BICYCLE'),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    string &
      ('BICYCLE' | 'CAR' | 'SCOOTER' | 'SHARED_BICYCLE' | 'WALK' | 'SHARED_E_BICYCLE'),
    PersonalModeBrand
  > => true,
  'PersonalMode',
);
export interface PersonalModeBrand {
  readonly PersonalMode: unique symbol;
}

// PublicTransitMode
// A mode that involves transit with fixed schedules
export type PublicTransitMode = t.Branded<
  string &
    ('AEROPLANE' | 'BUS' | 'FERRY' | 'RAIL' | 'SUBWAY' | 'TRAIN' | 'TRAM' | 'TRANSIT'),
  PublicTransitModeBrand
>;
export const PublicTransitMode = t.brand(
  t.intersection([
    t.string,
    t.union([
      t.literal('AEROPLANE'),
      t.literal('BUS'),
      t.literal('FERRY'),
      t.literal('RAIL'),
      t.literal('SUBWAY'),
      t.literal('TRAIN'),
      t.literal('TRAM'),
      t.literal('TRANSIT'),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    string &
      ('AEROPLANE' | 'BUS' | 'FERRY' | 'RAIL' | 'SUBWAY' | 'TRAIN' | 'TRAM' | 'TRANSIT'),
    PublicTransitModeBrand
  > => true,
  'PublicTransitMode',
);
export interface PublicTransitModeBrand {
  readonly PublicTransitMode: unique symbol;
}

// PrivateTransitMode
// A mode that is available on-demand for your personal use
export type PrivateTransitMode = t.Branded<
  string &
    (
      | 'BUSISH'
      | 'CABLE_CAR'
      | 'CAR'
      | 'FUNICULAR'
      | 'GONDOLA'
      | 'SHARED_CAR'
      | 'TAXI'
      | 'TRAINISH'
    ),
  PrivateTransitModeBrand
>;
export const PrivateTransitMode = t.brand(
  t.intersection([
    t.string,
    t.union([
      t.literal('BUSISH'),
      t.literal('CABLE_CAR'),
      t.literal('CAR'),
      t.literal('FUNICULAR'),
      t.literal('GONDOLA'),
      t.literal('SHARED_CAR'),
      t.literal('TAXI'),
      t.literal('TRAINISH'),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    string &
      (
        | 'BUSISH'
        | 'CABLE_CAR'
        | 'CAR'
        | 'FUNICULAR'
        | 'GONDOLA'
        | 'SHARED_CAR'
        | 'TAXI'
        | 'TRAINISH'
      ),
    PrivateTransitModeBrand
  > => true,
  'PrivateTransitMode',
);
export interface PrivateTransitModeBrand {
  readonly PrivateTransitMode: unique symbol;
}

// TravelMode
// The default export. More information at the top.
export type TravelMode = t.Branded<
  WaitingMode | TransferMode | PersonalMode | PublicTransitMode | PrivateTransitMode,
  TravelModeBrand
>;
export const TravelMode = t.brand(
  t.union([
    WaitingMode,
    TransferMode,
    PersonalMode,
    PublicTransitMode,
    PrivateTransitMode,
  ]),
  (
    x,
  ): x is t.Branded<
    WaitingMode | TransferMode | PersonalMode | PublicTransitMode | PrivateTransitMode,
    TravelModeBrand
  > => true,
  'TravelMode',
);
export interface TravelModeBrand {
  readonly TravelMode: unique symbol;
}

export default TravelMode;

// Success
