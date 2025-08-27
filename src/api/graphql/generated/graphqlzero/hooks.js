import { useMutation, useQuery } from '@tanstack/react-query';
import { graphqlFetcher } from '@/api/graphql/client/graphqlFetcher';
export var OperatorKindEnum;
(function (OperatorKindEnum) {
    OperatorKindEnum["Gte"] = "GTE";
    OperatorKindEnum["Like"] = "LIKE";
    OperatorKindEnum["Lte"] = "LTE";
    OperatorKindEnum["Ne"] = "NE";
})(OperatorKindEnum || (OperatorKindEnum = {}));
export var SortOrderEnum;
(function (SortOrderEnum) {
    SortOrderEnum["Asc"] = "ASC";
    SortOrderEnum["Desc"] = "DESC";
})(SortOrderEnum || (SortOrderEnum = {}));
export const CreatePostDocument = `
    mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    body
  }
}
    `;
export const useCreatePostMutation = (options) => {
    return useMutation({
        mutationKey: ['CreatePost'],
        mutationFn: (variables) => graphqlFetcher(CreatePostDocument, variables)(),
        ...options
    });
};
export const DeletePostDocument = `
    mutation DeletePost($id: ID!) {
  deleteTodo(id: $id)
}
    `;
export const useDeletePostMutation = (options) => {
    return useMutation({
        mutationKey: ['DeletePost'],
        mutationFn: (variables) => graphqlFetcher(DeletePostDocument, variables)(),
        ...options
    });
};
export const UpdatePostDocument = `
    mutation UpdatePost($id: ID!, $input: UpdatePostInput!) {
  updatePost(id: $id, input: $input) {
    id
    title
    body
  }
}
    `;
export const useUpdatePostMutation = (options) => {
    return useMutation({
        mutationKey: ['UpdatePost'],
        mutationFn: (variables) => graphqlFetcher(UpdatePostDocument, variables)(),
        ...options
    });
};
export const CreateTodoDocument = `
    mutation CreateTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    id
    title
    completed
  }
}
    `;
export const useCreateTodoMutation = (options) => {
    return useMutation({
        mutationKey: ['CreateTodo'],
        mutationFn: (variables) => graphqlFetcher(CreateTodoDocument, variables)(),
        ...options
    });
};
export const DeleteTodoDocument = `
    mutation DeleteTodo($id: ID!) {
  deleteTodo(id: $id)
}
    `;
export const useDeleteTodoMutation = (options) => {
    return useMutation({
        mutationKey: ['DeleteTodo'],
        mutationFn: (variables) => graphqlFetcher(DeleteTodoDocument, variables)(),
        ...options
    });
};
export const UpdateTodoDocument = `
    mutation UpdateTodo($id: ID!, $input: UpdateTodoInput!) {
  updateTodo(id: $id, input: $input) {
    id
    title
    completed
  }
}
    `;
export const useUpdateTodoMutation = (options) => {
    return useMutation({
        mutationKey: ['UpdateTodo'],
        mutationFn: (variables) => graphqlFetcher(UpdateTodoDocument, variables)(),
        ...options
    });
};
export const GetCommentsByIdDocument = `
    query GetCommentsById($postId: ID!) {
  post(id: $postId) {
    comments {
      data {
        id
        name
        email
        body
      }
    }
  }
}
    `;
export const useGetCommentsByIdQuery = (variables, options) => {
    return useQuery({
        queryKey: ['GetCommentsById', variables],
        queryFn: graphqlFetcher(GetCommentsByIdDocument, variables),
        ...options
    });
};
useGetCommentsByIdQuery.getKey = (variables) => ['GetCommentsById', variables];
export const GetPostsDocument = `
    query GetPosts($options: PageQueryOptions) {
  posts(options: $options) {
    data {
      id
      title
      body
      user {
        id
        name
        email
      }
      comments {
        data {
          id
        }
      }
    }
    meta {
      totalCount
    }
  }
}
    `;
export const useGetPostsQuery = (variables, options) => {
    return useQuery({
        queryKey: variables === undefined ? ['GetPosts'] : ['GetPosts', variables],
        queryFn: graphqlFetcher(GetPostsDocument, variables),
        ...options
    });
};
useGetPostsQuery.getKey = (variables) => variables === undefined ? ['GetPosts'] : ['GetPosts', variables];
export const GetTodosDocument = `
    query GetTodos($options: PageQueryOptions) {
  todos(options: $options) {
    data {
      id
      title
      completed
    }
    meta {
      totalCount
    }
  }
}
    `;
export const useGetTodosQuery = (variables, options) => {
    return useQuery({
        queryKey: variables === undefined ? ['GetTodos'] : ['GetTodos', variables],
        queryFn: graphqlFetcher(GetTodosDocument, variables),
        ...options
    });
};
useGetTodosQuery.getKey = (variables) => variables === undefined ? ['GetTodos'] : ['GetTodos', variables];
