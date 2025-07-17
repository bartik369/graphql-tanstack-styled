export type PostActions = {
    update: (id: string) => void;
    delete: (id: string) => void;
    stepBack: () => void;
    handleLike: (id: string) => void;
    handleRefetchComments: (id: string) => void;
  }