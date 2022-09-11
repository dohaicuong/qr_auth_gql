/**
 * @generated SignedSource<<8e0a7be8083d466570fb0041c33d666a>>
 * @relayHash b91bdcbadc05cc7fdea6dba281cd5679
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID b91bdcbadc05cc7fdea6dba281cd5679

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
    "id": "b91bdcbadc05cc7fdea6dba281cd5679",
    "metadata": {},
    "name": "useAuthorizeSessionMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "04b0f840ed791ea4768f384e576a8455";

export default node;
