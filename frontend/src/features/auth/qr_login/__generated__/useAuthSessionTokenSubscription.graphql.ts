/**
 * @generated SignedSource<<b5d050d996f9516dc13aa8a8a37df392>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type useAuthSessionTokenSubscription$variables = {
  id: string;
};
export type useAuthSessionTokenSubscription$data = {
  readonly authSession: string;
};
export type useAuthSessionTokenSubscription = {
  response: useAuthSessionTokenSubscription$data;
  variables: useAuthSessionTokenSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "kind": "ScalarField",
    "name": "authSession",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useAuthSessionTokenSubscription",
    "selections": (v1/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useAuthSessionTokenSubscription",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "30537c7a28e3220d52d7cf51fd872361",
    "id": null,
    "metadata": {},
    "name": "useAuthSessionTokenSubscription",
    "operationKind": "subscription",
    "text": "subscription useAuthSessionTokenSubscription(\n  $id: ID!\n) {\n  authSession(id: $id)\n}\n"
  }
};
})();

(node as any).hash = "f48ffad7641ea25f2400afdd21f0c887";

export default node;
