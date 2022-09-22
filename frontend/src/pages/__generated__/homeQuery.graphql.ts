/**
 * @generated SignedSource<<217952ca374c62d531d5a0e487efc874>>
 * @relayHash 7c7a41b910e78a95588355a3afcf8649
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 7c7a41b910e78a95588355a3afcf8649

import { ConcreteRequest, Query } from 'relay-runtime';
export type homeQuery$variables = {};
export type homeQuery$data = {
  readonly me: {
    readonly username: string;
  } | null;
};
export type homeQuery = {
  response: homeQuery$data;
  variables: homeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "homeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Account",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "homeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Account",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "7c7a41b910e78a95588355a3afcf8649",
    "metadata": {},
    "name": "homeQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "7ff00917a0e3611118a026a8c10e121f";

import { PreloadableQueryRegistry } from 'relay-runtime';
PreloadableQueryRegistry.set(node.params.id, node);

export default node;
