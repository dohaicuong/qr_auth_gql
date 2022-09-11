/**
 * @generated SignedSource<<a720b65b274237283508276bdba8dcbf>>
 * @relayHash 1e58ab8ead67275b9043bb7e6c287f62
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 1e58ab8ead67275b9043bb7e6c287f62

import { ConcreteRequest, Query } from 'relay-runtime';
export type homeQuery$variables = {};
export type homeQuery$data = {
  readonly me: {
    readonly id: string;
    readonly username: string;
  } | null;
};
export type homeQuery = {
  response: homeQuery$data;
  variables: homeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Account",
    "kind": "LinkedField",
    "name": "me",
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
        "name": "username",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "homeQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "homeQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": "1e58ab8ead67275b9043bb7e6c287f62",
    "metadata": {},
    "name": "homeQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "bd6bb76062710c39083d305829ddfe4c";

import { PreloadableQueryRegistry } from 'relay-runtime';
PreloadableQueryRegistry.set(node.params.id, node);

export default node;
