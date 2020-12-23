
type MergedState = {
  root: RootState;
  wallet: WalletState;
};

type GeneralStore = RootStore<Pick<MergedState, "root">> &
  WalletStore<Pick<MergedState, "wallet">>;
