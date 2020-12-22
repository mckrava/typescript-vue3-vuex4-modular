// import { ActionContext } from "vuex";
/// <reference lib="vuex.ActionContext" />
// import {
//   RootMutationType,
//   RootActionType,
// } from "@/store/storeTypes.ts";

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

enum RootMutationType {
  SetDummyRootVar = "SET_DUMMY_ROOT_VAR",
  SetAccountList = "SET_ACCOUNT_LIST",
}

type RootMutations = {
  [RootMutationType.SetDummyRootVar](state: RootState, payload: boolean): void;
  [RootMutationType.SetAccountList](
    state: RootState,
    accounts: AccountInfo[]
  ): void;
};

// =============================== ACTIONS =====================================

enum RootActionType {
  ProcessDummyVar = "ROOT__PROCESS_DUMMY_VAR",
  UpdateAccountsList = "ROOT__UPDATE_ACCOUNTS_LIST",
}

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
  [RootActionType.ProcessDummyVar](
    context: RootActionAugments,
    newValue: boolean
  ): void;
  [RootActionType.UpdateAccountsList](
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
