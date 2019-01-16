<template>
  <div id="app">
    <AgentGroups/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AgentGroups from "./components/AgentGroups.vue";
import Store from "./store";

import EventEmitter, {OPEN_ADD_EDIT_MODAL, OpenAddEditModalData} from "./events";

@Component({
  components: {
    AgentGroups,
  },
})
export default class App extends Vue {
  created() {
    Store.dispatch("initialize");
    EventEmitter.$on(OPEN_ADD_EDIT_MODAL, this.onOpenAddEditModal);
  }

  destroyed() {
    EventEmitter.$off(OPEN_ADD_EDIT_MODAL, this.onOpenAddEditModal);
  }

  onOpenAddEditModal(payload: OpenAddEditModalData) {
    // eslint-disable-next-line
    console.log(payload);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
