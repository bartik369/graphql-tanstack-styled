import type  { Post } from "@/api/graphql/generated/graphqlzero/types";

export interface PostState {
    post: {
        id: string | null;
        title: string | null;
        body: string | null;
    },
    pageSize: number;
    page: number;
    fetchedPostId: string;
    fetched: boolean;
    likes: Map<string, number>;
    isUpdate: boolean;
    mutationError: string | null;
}

export enum PostActionTypes {
    SET_ERROR = 'SET_ERROR',
    RESET_ERROR = 'RESET_ERROR',
    SET_POST = 'SET_POST',
    UPDATE_POST = 'UPDATE_POST',
    DELETE_POST = 'DELETE_POST',
    RESET_POST = 'RESET_POST',
    SET_FETCHED_POST = 'SET_FETCHED_POST',
    RESET_FETCHED_POST = 'RESET_FETCHED_POST',
    SET_FETCHED = 'SET_FETCHED',
    RESET_FETCHED = 'RESET_FETCHED',
    ADD_COMMENT = 'ADD_COMMENT',
    UPDATE_COMMENT = 'UPDATE_COMMENT',
    DELETE_COMMENT = 'DELETE_COMMENT',
    INCREMENT_LIKE = 'INCREMENT_LIKE',
    DECREMENT_LIKE = 'DECREMENT_LIKE',
    SET_LIKES = 'SET_LIKES',
    SET_IS_UPDATE = 'SET_IS_UPDATE',
    RESET_IS_UPDATE = 'RESET_IS_UPDATE',
    SET_PAGE = 'SET_PAGE',
}

export type PostAction = 
| { type: PostActionTypes.SET_ERROR, payload: string }
| { type: PostActionTypes.RESET_ERROR }
| { type: PostActionTypes.SET_POST, payload: Post }
| { type: PostActionTypes.UPDATE_POST, payload: Partial<Post> }
| { type: PostActionTypes.DELETE_POST}
| { type: PostActionTypes.RESET_POST, payload: Partial<Post>}
| { type: PostActionTypes.SET_POST, payload: Post }
| { type: PostActionTypes.SET_FETCHED_POST, payload: string }
| { type: PostActionTypes.SET_FETCHED_POST, payload: string }
| { type: PostActionTypes.SET_FETCHED, payload: boolean }
| { type: PostActionTypes.RESET_FETCHED }
| { type: PostActionTypes.INCREMENT_LIKE, payload: string }
| { type: PostActionTypes.DECREMENT_LIKE, payload: string }
| { type: PostActionTypes.SET_LIKES }
| { type: PostActionTypes.SET_IS_UPDATE, payload: boolean; }
| { type: PostActionTypes.RESET_IS_UPDATE }
| { type: PostActionTypes.SET_PAGE, payload: number }