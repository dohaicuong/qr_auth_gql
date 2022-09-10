/**
 * @generated SignedSource<<dd60b007ee79d21afb90c51d53536f81>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type homeAuthorizeSessionMutation$variables = {
  id: string;
};
export type homeAuthorizeSessionMutation$data = {
  readonly authorizeAuthSession: boolean;
};
export type homeAuthorizeSessionMutation = {
  response: homeAuthorizeSessionMutation$data;
  variables: homeAuthorizeSessionMutation$variables;
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
    "name": "homeAuthorizeSessionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "homeAuthorizeSessionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "56b71674e1085cd24ffc5bc04a2ed4a1",
    "id": null,
    "metadata": {},
    "name": "homeAuthorizeSessionMutation",
    "operationKind": "mutation",
    "text": "mutation homeAuthorizeSessionMutation(\n  $id: ID!\n) {\n  authorizeAuthSession(id: $id)\n}\n"
  }
};
})();

(node as any).hash = "88b13653ea1c55a944761e161d7f6275";

export default node;
