import type { Post } from "@/api/graphql/generated/hooks";

export interface PostState {
    post: {
        id: string;
        title: string;
        body: string;
    },
    fetchedPostId: string;
    fetched: boolean;
    likes: Record<string, number>
}

export enum PostActionTypes {
    SET_POST = 'SET_POST',
    UPDATE_POST = 'UPDATE_POST',
    DELETE_POST = 'DELETE_POST',
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

}

export type PostAction = 
| { type: PostActionTypes.SET_POST, payload: Post }
| { type: PostActionTypes.UPDATE_POST, payload: Partial<Post> }
| { type: PostActionTypes.DELETE_POST}
| { type: PostActionTypes.SET_POST, payload: Post }
| { type: PostActionTypes.SET_FETCHED_POST, payload: string }
| { type: PostActionTypes.SET_FETCHED_POST, payload: string }
| { type: PostActionTypes.SET_FETCHED, payload: boolean }
| { type: PostActionTypes.RESET_FETCHED }
| { type: PostActionTypes.INCREMENT_LIKE, payload: string }
| { type: PostActionTypes.DECREMENT_LIKE, payload: string }
| { type: PostActionTypes.SET_LIKES }