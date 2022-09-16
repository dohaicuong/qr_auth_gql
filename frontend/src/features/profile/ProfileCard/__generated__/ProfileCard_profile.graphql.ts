/**
 * @generated SignedSource<<c0dbfcb84382ffa873936e6982d552d4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
import profileAgeResolver from "../../../../providers/relay/resolvers/ProfileAgeResolver.ts";
export type ProfileCard_profile$data = {
  readonly age: ReturnType<typeof profileAgeResolver> | null;
  readonly avatar: string;
  readonly description: string | null;
  readonly name: string;
  readonly title: string | null;
  readonly " $fragmentSpreads": FragmentRefs<"ProfileEditDialog_profile">;
  readonly " $fragmentType": "ProfileCard_profile";
};
export type ProfileCard_profile$key = {
  readonly " $data"?: ProfileCard_profile$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProfileCard_profile">;
};

import ProfileAgeResolver from './../../../../providers/relay/resolvers/ProfileAgeResolver';

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProfileCard_profile",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatar",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ProfileAgeResolver"
      },
      "kind": "RelayResolver",
      "name": "age",
      "resolverModule": ProfileAgeResolver,
      "path": "age"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ProfileEditDialog_profile"
    }
  ],
  "type": "Profile",
  "abstractKey": null
};

(node as any).hash = "567d31b7537130cddd281ebbde610f08";

export default node;
