/**
 * @generated SignedSource<<b60043d7791735bbc9c59a81376f2f39>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProfileEditDialog_profile$data = {
  readonly avatar: string;
  readonly description: string | null;
  readonly dob: any;
  readonly name: string;
  readonly title: string | null;
  readonly " $fragmentType": "ProfileEditDialog_profile";
};
export type ProfileEditDialog_profile$key = {
  readonly " $data"?: ProfileEditDialog_profile$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProfileEditDialog_profile">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProfileEditDialog_profile",
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
    }
  ],
  "type": "Profile",
  "abstractKey": null
};

(node as any).hash = "f9dacf26c47c5709df757fb7f77a0d97";

export default node;
