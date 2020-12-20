import { Module } from "vuex";

import { state } from "@/store/root/state.ts";
import { mutations } from "@/store/root/mutations.ts";
import { actions } from "@/store/root/actions.ts";
import { getters } from "@/store/root/getters.ts";

export const root: Module<RootState, MergedState> = {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters,
};


