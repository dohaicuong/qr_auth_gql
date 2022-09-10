/**
 * @generated SignedSource<<870901a67489332f3281afc942c170db>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useAuthorizeSessionMutation$variables = {
  id: string;
};
export type useAuthorizeSessionMutation$data = {
  readonly authorizeAuthSession: boolean;
};
export type useAuthorizeSessionMutation = {
  response: useAuthorizeSessionMutation$data;
  variables: useAuthorizeSessionMutation$variables;
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
    "name": "authorizeAuthSession",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useAuthorizeSessionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useAuthorizeSessionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b91bdcbadc05cc7fdea6dba281cd5679",
    "id": null,
    "metadata": {},
    "name": "useAuthorizeSessionMutation",
    "operationKind": "mutation",
    "text": "mutation useAuthorizeSessionMutation(\n  $id: ID!\n) {\n  authorizeAuthSession(id: $id)\n}\n"
  }
};
})();

(node as any).hash = "04b0f840ed791ea4768f384e576a8455";

export default node;
