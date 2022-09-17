/**
 * @generated SignedSource<<9fba9d777de99defae6975b1cd5b6328>>
 * @relayHash 7495df551b0da5f153210c17652edb0c
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 7495df551b0da5f153210c17652edb0c

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TaskDocketCreateInput = {
  name: string;
};
export type useCreateTaskDocketMutation$variables = {
  connections: ReadonlyArray<string>;
  input: TaskDocketCreateInput;
};
export type useCreateTaskDocketMutation$data = {
  readonly taskDocketCreate: {
    readonly data?: {
      readonly taskDocket: {
        readonly " $fragmentSpreads": FragmentRefs<"TaskDocketListItem_taskDocket">;
      };
    };
  };
};
export type useCreateTaskDocketMutation = {
  response: useCreateTaskDocketMutation$data;
  variables: useCreateTaskDocketMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useCreateTaskDocketMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "taskDocketCreate",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TaskDocketCreatePayload",
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
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "TaskDocketListItem_taskDocket"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "MutationTaskDocketCreateSuccess",
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "useCreateTaskDocketMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "taskDocketCreate",
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
                "concreteType": "TaskDocketCreatePayload",
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
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "filters": null,
                    "handle": "appendNode",
                    "key": "",
                    "kind": "LinkedHandle",
                    "name": "taskDocket",
                    "handleArgs": [
                      {
                        "kind": "Variable",
                        "name": "connections",
                        "variableName": "connections"
                      },
                      {
                        "kind": "Literal",
                        "name": "edgeTypeName",
                        "value": "AccountTaskDocketsConnectionEdge"
                      }
                    ]
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "MutationTaskDocketCreateSuccess",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "7495df551b0da5f153210c17652edb0c",
    "metadata": {},
    "name": "useCreateTaskDocketMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "b95ee6f72229b425d7dc606e8bf41daf";

export default node;
