import { GetterTree } from "vuex";

export const getters: GetterTree<RootState, MergedState> & RootGetters = {
  dummyRootVar(state) {
    return state.dummyRootVar;
  },
  accountList(state) {
    return state.accountList;
  },
};
