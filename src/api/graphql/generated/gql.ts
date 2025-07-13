/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation CreateTodo($input: CreateTodoInput!) {\n  createTodo(input: $input) {\n    id\n    title\n    completed\n  }\n}": typeof types.CreateTodoDocument,
    "mutation DeleteTodo($id: ID!) {\n  deleteTodo(id: $id)\n}": typeof types.DeleteTodoDocument,
    "mutation UpdateTodo($id: ID!, $input: UpdateTodoInput!) {\n  updateTodo(id: $id, input: $input) {\n    id\n    title\n    completed\n  }\n}": typeof types.UpdateTodoDocument,
    "query GetTodos($options: PageQueryOptions) {\n  todos(options: $options) {\n    data {\n      id\n      title\n      completed\n      user {\n        id\n        name\n      }\n    }\n    meta {\n      totalCount\n    }\n  }\n}": typeof types.GetTodosDocument,
};
const documents: Documents = {
    "mutation CreateTodo($input: CreateTodoInput!) {\n  createTodo(input: $input) {\n    id\n    title\n    completed\n  }\n}": types.CreateTodoDocument,
    "mutation DeleteTodo($id: ID!) {\n  deleteTodo(id: $id)\n}": types.DeleteTodoDocument,
    "mutation UpdateTodo($id: ID!, $input: UpdateTodoInput!) {\n  updateTodo(id: $id, input: $input) {\n    id\n    title\n    completed\n  }\n}": types.UpdateTodoDocument,
    "query GetTodos($options: PageQueryOptions) {\n  todos(options: $options) {\n    data {\n      id\n      title\n      completed\n      user {\n        id\n        name\n      }\n    }\n    meta {\n      totalCount\n    }\n  }\n}": types.GetTodosDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateTodo($input: CreateTodoInput!) {\n  createTodo(input: $input) {\n    id\n    title\n    completed\n  }\n}"): (typeof documents)["mutation CreateTodo($input: CreateTodoInput!) {\n  createTodo(input: $input) {\n    id\n    title\n    completed\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteTodo($id: ID!) {\n  deleteTodo(id: $id)\n}"): (typeof documents)["mutation DeleteTodo($id: ID!) {\n  deleteTodo(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateTodo($id: ID!, $input: UpdateTodoInput!) {\n  updateTodo(id: $id, input: $input) {\n    id\n    title\n    completed\n  }\n}"): (typeof documents)["mutation UpdateTodo($id: ID!, $input: UpdateTodoInput!) {\n  updateTodo(id: $id, input: $input) {\n    id\n    title\n    completed\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTodos($options: PageQueryOptions) {\n  todos(options: $options) {\n    data {\n      id\n      title\n      completed\n      user {\n        id\n        name\n      }\n    }\n    meta {\n      totalCount\n    }\n  }\n}"): (typeof documents)["query GetTodos($options: PageQueryOptions) {\n  todos(options: $options) {\n    data {\n      id\n      title\n      completed\n      user {\n        id\n        name\n      }\n    }\n    meta {\n      totalCount\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;