/**
 * @generated SignedSource<<bf9aafe614a1d4639b9bc923c2af1ead>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProfileAgeResolver$data = {
  readonly dob: any;
  readonly " $fragmentType": "ProfileAgeResolver";
};
export type ProfileAgeResolver$key = {
  readonly " $data"?: ProfileAgeResolver$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProfileAgeResolver">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProfileAgeResolver",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "dob",
      "storageKey": null
    }
  ],
  "type": "Profile",
  "abstractKey": null
};

(node as any).hash = "5f0d5f6fc6784c200670b4f32d8e2619";

export default node;
