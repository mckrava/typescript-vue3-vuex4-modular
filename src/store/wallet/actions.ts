import { ActionTree } from "vuex";

export const actions: ActionTree<WalletState, MergedState> & WalletActions = {
  changeWalletStatusSMWallet({ commit, state }, newStatusData) {
    console.log("state.walletStatus", state.walletStatus);
    commit('SET_WALLET_STATUS__WALLET', newStatusData);
  },

  async changeWalletActivationSMWallet({ commit, state, dispatch }, isActive) {
    dispatch("processDummyVarSMRoot", true);
    commit("SET_WALLET_STATUS__WALLET", {
      ...state.walletStatus,
      active: isActive,
    });
  },
};
