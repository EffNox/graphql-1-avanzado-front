import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { getOperationAST } from 'graphql';
import { WebSocketLink } from '@apollo/client/link/ws';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {

  const http = httpLink.create({
    uri: 'http://localhost:5300/gql'
  });

  const ws = new WebSocketLink({
    uri: `ws://localhost:5300/graphql`,
    options: { reconnect: true }
  });

  return {
    // link: ApolloLink.split(
    //   ops => {
    //     const { kind, operation } = getOperationAST(ops.query, ops.operationName);
    //     return kind === 'OperationDefinition' && operation === 'subscription';
    //   },
    //   ws,
    //   http,
    // ),
    link: ApolloLink.split(
      ops => {
        const ope = getOperationAST(ops.query, ops.operationName);
        return !!ope && ope.operation === 'subscription';
      },
      ws,
      http,
    ),
    cache: new InMemoryCache({ addTypename: !1 }),
  };
}

@NgModule({
  providers: [
    { provide: APOLLO_OPTIONS, useFactory: createApollo, deps: [HttpLink], },
  ],
})
export class GraphQLModule { }
