import { ActionTree } from "vuex";

import {
  WalletActionType,
  WalletMutationType,
  RootActionType,
} from "@/types/store/storeTypes";

export const actions: ActionTree<WalletState, MergedState> & WalletActions = {
  [WalletActionType.ChangeWalletStatus]({ commit, state }, newStatusData) {
    console.log("state.walletStatus", state.walletStatus);
    commit(WalletMutationType.SetWalletStatus, newStatusData);
  },

  async [WalletActionType.ChangeWalletActivation](
    { commit, state, dispatch },
    isActive
  ) {
    // dispatch(RootActionType.ProcessDummyVar, true);
    console.log("state - ", state);
    // commit(WalletMutationType.SetWalletStatus, {
    //   ...state.walletStatus,
    //   active: isActive,
    // });
  },
};
