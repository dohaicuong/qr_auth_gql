/**
 * @generated SignedSource<<3fb45d580f4f88f45d49d3fcf5bbd2b1>>
 * @relayHash 4a11e11c510b4d532972f5bc6cfba9d1
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 4a11e11c510b4d532972f5bc6cfba9d1

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TaskDocketDeleteInput = {
  id: string;
};
export type useDeleteTaskDocketMutation$variables = {
  input: TaskDocketDeleteInput;
};
export type useDeleteTaskDocketMutation$data = {
  readonly taskDocketDelete: {
    readonly data?: {
      readonly taskDocket: {
        readonly id: string;
      };
    };
  };
};
export type useDeleteTaskDocketMutation = {
  response: useDeleteTaskDocketMutation$data;
  variables: useDeleteTaskDocketMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useDeleteTaskDocketMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "taskDocketDelete",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TaskDocketDeletePayload",
                "kind": "LinkedField",
                "name": "data",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TaskDocket",
                    "kind": "LinkedField",
                    "name": "taskDocket",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "MutationTaskDocketDeleteSuccess",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useDeleteTaskDocketMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "taskDocketDelete",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TaskDocketDeletePayload",
                "kind": "LinkedField",
                "name": "data",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TaskDocket",
                    "kind": "LinkedField",
                    "name": "taskDocket",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "filters": null,
                        "handle": "deleteRecord",
                        "key": "",
                        "kind": "ScalarHandle",
                        "name": "id"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "MutationTaskDocketDeleteSuccess",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "4a11e11c510b4d532972f5bc6cfba9d1",
    "metadata": {},
    "name": "useDeleteTaskDocketMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "2821e8ff4640239dafcc3ac7dc39668a";

export default node;
