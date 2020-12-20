import { MutationTree } from "vuex";

import { RootMutationType } from "@/types/store/storeTypes";


export const mutations: MutationTree<RootState> & RootMutations = {
  [RootMutationType.SetDummyRootVar](state, payload) {
    state.dummyRootVar = payload;
  },
  [RootMutationType.SetAccountList](state, accounts) {
    state.accountList = accounts;
  },
};
