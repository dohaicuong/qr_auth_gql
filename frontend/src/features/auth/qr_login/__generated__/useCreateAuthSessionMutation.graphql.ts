/**
 * @generated SignedSource<<b8961de482e5ce07397bed82817f38d6>>
 * @relayHash b34af49a964182ff6af7f7e511f9088a
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID b34af49a964182ff6af7f7e511f9088a

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
    "id": "b34af49a964182ff6af7f7e511f9088a",
    "metadata": {},
    "name": "useCreateAuthSessionMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "351031a23d1b12321799f7cfc62d3de8";

export default node;
