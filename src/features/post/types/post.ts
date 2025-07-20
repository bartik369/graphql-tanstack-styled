import type { Post } from "@/api/graphql/generated/graphql";

export type PostActions<T> = {
    submit: (values: Partial<T>) => void;
    update: (id: string) => void;
    delete: (id: string) => void;
    reset: () => void;
    stepBack: () => void;
    handleLike: (id: string) => void;
    handleRefetchComments: (id: string) => void;
    handleInputChange: (changedValues: Partial<T>) => void;
  }

export type PostActionsBase = {
    submit: (values: Partial<Post>) => void;
    update: (id: string) => void;
    delete: (id: string) => void;
    reset: () => void;
    stepBack: () => void;
    handleLike: (id: string) => void;
    handleInputChange: (changedValues: Partial<Post>) => void;
    handleRefetchComments: (id: string) => void;
  }