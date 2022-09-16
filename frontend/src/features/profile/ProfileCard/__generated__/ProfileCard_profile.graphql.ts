/**
 * @generated SignedSource<<aec92dfa1bd64c366ddce2654ffc5b35>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProfileCard_profile$data = {
  readonly avatar: string;
  readonly description: string | null;
  readonly dob: any;
  readonly name: string;
  readonly title: string | null;
  readonly " $fragmentSpreads": FragmentRefs<"ProfileEditDialog_profile">;
  readonly " $fragmentType": "ProfileCard_profile";
};
export type ProfileCard_profile$key = {
  readonly " $data"?: ProfileCard_profile$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProfileCard_profile">;
};

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
      "name": "dob",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "ProfileEditDialog_profile"
    }
  ],
  "type": "Profile",
  "abstractKey": null
};

(node as any).hash = "22b86d33bddf2d5350f2fec2fb8b1d82";

export default node;
