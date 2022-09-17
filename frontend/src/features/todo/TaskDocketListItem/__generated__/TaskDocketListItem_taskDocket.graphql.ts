/**
 * @generated SignedSource<<f0b0e8468aeac935555dfc8eb32ae975>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TaskDocketListItem_taskDocket$data = {
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "TaskDocketListItem_taskDocket";
};
export type TaskDocketListItem_taskDocket$key = {
  readonly " $data"?: TaskDocketListItem_taskDocket$data;
  readonly " $fragmentSpreads": FragmentRefs<"TaskDocketListItem_taskDocket">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TaskDocketListItem_taskDocket",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "TaskDocket",
  "abstractKey": null
};

(node as any).hash = "3c65f9c7dd9d29c5b072f60ab2bb5b39";

export default node;
