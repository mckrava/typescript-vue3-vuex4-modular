import { MutationTree } from "vuex";

export const mutations: MutationTree<WalletState> & WalletMutations = {
  SET_WALLET_STATUS__WALLET(state, walletStatus) {
    state.walletStatus = walletStatus;
  },
  SET_IS_WALLET__WALLET(state, payload) {
    state.isWallet = payload;
  },
};
