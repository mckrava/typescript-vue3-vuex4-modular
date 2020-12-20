// import { CommitOptions, DispatchOptions, Store as VuexStore } from "vuex";

type MergedState = {
  root: RootState;
  wallet: WalletState;
};

// type MergerTypes = {
//   root: RootState;
//   wallet: WalletState;
// };

type GeneralStore = RootStore<Pick<MergedState, "root">> &
  WalletStore<Pick<MergedState, "wallet">>;
