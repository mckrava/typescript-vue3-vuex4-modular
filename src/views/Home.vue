<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button @click.prevent="onProcessDummyVar">ProcessDummyVar</button>
    <button @click.prevent="onChangeWalletStatus">
      ChangeWalletActivation
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useStore } from "@/store";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    const currentStore = useStore();

    console.log("currentStore - ", currentStore);

    const onProcessDummyVar = () => {
      currentStore.dispatch("processDummyVarSMRoot", true);
    };

    const onChangeWalletStatus = () => {
      currentStore.dispatch("changeWalletActivationSMWallet", true);
    };

    return {
      onProcessDummyVar,
      onChangeWalletStatus,
    };
  },
});
</script>
