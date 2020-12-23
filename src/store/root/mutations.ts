import { MutationTree } from "vuex";

export const mutations: MutationTree<RootState> & RootMutations = {
  SET_DUMMY_ROOT_VAR__ROOT(state, payload) {
    state.dummyRootVar = payload;
  },
  SET_ACCOUNT_LIST__ROOT(state, accounts) {
    state.accountList = accounts;
  },
};
