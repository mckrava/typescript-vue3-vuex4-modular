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

type WalletMutations = {
  SET_WALLET_STATUS__WALLET(
    state: WalletState,
    walletStatus: WalletStatus
  ): void;
  SET_IS_WALLET__WALLET(state: WalletState, payload: boolean): void;
};

// =============================== ACTIONS =====================================

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
  changeWalletStatusSMWallet(
    context: WalletActionAugments,
    newStatusData: WalletStatus
  ): void;
  changeWalletActivationSMWallet(
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
