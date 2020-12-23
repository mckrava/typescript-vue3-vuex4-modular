// ================================= STATE =====================================

type AccountInfo = {
  name: string;
  address: string;
};

type RootState = {
  dummyRootVar: boolean;
  accountList: AccountInfo[];
};

// ================================ GETTERS ====================================

type RootGetters = {
  dummyRootVar(state: RootState): boolean;
  accountList(state: RootState): AccountInfo[];
};

// =============================== MUTATION ====================================

type RootMutations = {
  SET_DUMMY_ROOT_VAR__ROOT(state: RootState, payload: boolean): void;
  SET_ACCOUNT_LIST__ROOT(state: RootState, accounts: AccountInfo[]): void;
};

// =============================== ACTIONS =====================================

type RootActionAugments = Omit<
  ActionContext<RootState, MergedState>,
  "commit" | "state"
> & {
  commit<K extends keyof RootMutations>(
    key: K,
    payload: Parameters<RootMutations[K]>[1]
  ): ReturnType<RootMutations[K]>;
} & {
  state: RootState;
};

type RootActions = {
  processDummyVarSMRoot(context: RootActionAugments, newValue: boolean): void;
  updateAccountsListSMRoot(
    context: RootActionAugments,
    newListData: AccountInfo[]
  ): void;
};

// ================================ STORE ======================================

// Setup store type
type RootStore<S = RootState> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<
    K extends keyof RootMutations,
    P extends Parameters<RootMutations[K]>[1]
  >(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<RootMutations[K]>;
} & {
  getters: {
    [K in keyof RootGetters]: ReturnType<RootGetters[K]>;
  };
} & {
  dispatch<K extends keyof RootActions>(
    key: K,
    payload: Parameters<RootActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<RootActions[K]>;
};
