import { GetterTree } from "vuex";

export const getters: GetterTree<WalletState, MergedState> & WalletGetters = {
  walletStatus(state) {
    return state.walletStatus;
  },
  isWallet(state) {
    return state.isWallet;
  },
};
