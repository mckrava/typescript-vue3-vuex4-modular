// import { ActionContext } from "vuex";
/// <reference lib="vuex.ActionContext" />

// import { WalletActionType, WalletMutationType } from "@/store/storeTypes.ts";

// ================================= STATE =====================================

type WalletStatus = {
  amount: number;
  active: boolean;
};

type WalletState = {
  walletStatus: WalletStatus;
  isWallet: boolean;
};

// ================================ GETTERS ====================================

type WalletGetters = {
  walletStatus(state: WalletState): WalletStatus;
  isWallet(state: WalletState): boolean;
};

// =============================== MUTATION ====================================

enum WalletMutationType {
  SetWalletStatus = "SET_WALLET_STATUS",
  SetIsWallet = "SET_IS_WALLET",
}

type WalletMutations = {
  [WalletMutationType.SetWalletStatus](
    state: WalletState,
    walletStatus: WalletStatus
  ): void;
  [WalletMutationType.SetIsWallet](state: WalletState, payload: boolean): void;
};

// =============================== ACTIONS =====================================

enum WalletActionType {
  ChangeWalletStatus = "CHANGE_WALLET_STATUS",
  ChangeWalletActivation = "CHANGE_WALLET_ACTIVATION",
}

type WalletActionAugments = Omit<
  ActionContext<WalletState, MergedState>,
  "commit"
> & {
  commit<K extends keyof WalletMutations>(
    key: K,
    payload: Parameters<WalletMutations[K]>[1]
  ): ReturnType<WalletMutations[K]>;
};

type WalletActions = {
  [WalletActionType.ChangeWalletStatus](
    context: WalletActionAugments,
    newStatusData: WalletStatus
  ): void;
  [WalletActionType.ChangeWalletActivation](
    context: WalletActionAugments,
    isActive: boolean
  ): Promise;
};

// ================================ STORE ======================================

type WalletStore<S = WalletState> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<
    K extends keyof WalletMutations,
    P extends Parameters<WalletMutations[K]>[1]
  >(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<WalletMutations[K]>;
} & {
  getters: {
    [K in keyof WalletGetters]: ReturnType<WalletGetters[K]>;
  };
} & {
  dispatch<K extends keyof WalletActions>(
    key: K,
    payload: Parameters<WalletActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<WalletActions[K]>;
};
