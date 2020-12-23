import { ActionTree } from "vuex";

export const actions: ActionTree<RootState, MergedState> & RootActions = {
  processDummyVarSMRoot({ commit, state, rootState }, newValue) {
    console.log(
      "processDummyVar --- rootState.wallet.walletStatus",
      rootState.wallet.walletStatus
    );
    console.log("processDummyVar --- state.dummyRootVar", state.dummyRootVar);

    commit("SET_DUMMY_ROOT_VAR__ROOT", newValue);
  },

  updateAccountsListSMRoot({ commit, state }, newListData) {
    commit("SET_ACCOUNT_LIST__ROOT", [...state.accountList, ...newListData]);
  },
};
