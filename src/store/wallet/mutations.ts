import { MutationTree } from "vuex";

import { WalletMutationType } from "@/types/store/storeTypes";

export const mutations: MutationTree<WalletState> & WalletMutations = {
  [WalletMutationType.SetWalletStatus](state, walletStatus) {
    state.walletStatus = walletStatus;
  },
  [WalletMutationType.SetIsWallet](state, payload) {
    state.isWallet = payload;
  },
};
