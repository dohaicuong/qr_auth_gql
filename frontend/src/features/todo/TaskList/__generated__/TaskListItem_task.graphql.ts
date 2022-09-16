/**
 * @generated SignedSource<<badab0e2957cd8b490f46c9d9f34d10f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TaskListItem_task$data = {
  readonly content: string;
  readonly id: string;
  readonly isDone: boolean;
  readonly " $fragmentType": "TaskListItem_task";
};
export type TaskListItem_task$key = {
  readonly " $data"?: TaskListItem_task$data;
  readonly " $fragmentSpreads": FragmentRefs<"TaskListItem_task">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TaskListItem_task",
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
      "name": "content",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isDone",
      "storageKey": null
    }
  ],
  "type": "Task",
  "abstractKey": null
};

(node as any).hash = "5991b6a4b427eee35a00e97c51e33e6f";

export default node;
