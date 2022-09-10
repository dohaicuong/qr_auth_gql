/**
 * @generated SignedSource<<32cdb230f6c5f80f3b6f23b313f82edd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useCreateAuthSessionMutation$variables = {};
export type useCreateAuthSessionMutation$data = {
  readonly createAuthSession: string;
};
export type useCreateAuthSessionMutation = {
  response: useCreateAuthSessionMutation$data;
  variables: useCreateAuthSessionMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "createAuthSession",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useCreateAuthSessionMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useCreateAuthSessionMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b34af49a964182ff6af7f7e511f9088a",
    "id": null,
    "metadata": {},
    "name": "useCreateAuthSessionMutation",
    "operationKind": "mutation",
    "text": "mutation useCreateAuthSessionMutation {\n  createAuthSession\n}\n"
  }
};
})();

(node as any).hash = "351031a23d1b12321799f7cfc62d3de8";

export default node;
