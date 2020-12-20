import { createStore, createLogger, ModuleTree } from "vuex";

import { root } from "@/store/root";
import { wallet } from "@/store/wallet";

const modules: ModuleTree<MergedState> = { root, wallet };

// export default createStore<MergedState>({
//   modules,
// });

export const store = createStore({
  plugins: process.env.NODE_ENV === "production" ? [] : [createLogger()],
  modules,
});

export function useStore(): GeneralStore {
  return store as GeneralStore;
}

export default store;
