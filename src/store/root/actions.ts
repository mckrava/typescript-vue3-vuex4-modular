import { ActionTree } from "vuex";

import { RootActionType, RootMutationType } from "@/types/store/storeTypes";

export const actions: ActionTree<RootState, MergedState> & RootActions = {
  [RootActionType.ProcessDummyVar]({ commit, state, rootState }, newValue) {
    console.log(
      "processDummyVar --- rootState.wallet.walletStatus",
      rootState.wallet.walletStatus
    );
    console.log("processDummyVar --- state.dummyRootVar", state.dummyRootVar);

    commit(RootMutationType.SetDummyRootVar, newValue);
  },

  [RootActionType.UpdateAccountsList]({ commit, state }, newListData) {
    commit(RootMutationType.SetAccountList, [
      ...state.accountList,
      ...newListData,
    ]);
  },
};
