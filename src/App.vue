<template>
  <div id="app">
    <AgentGroups/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AgentGroups from "./components/AgentGroups.vue";
import Store from "./store";

@Component({
  components: {
    AgentGroups,
  },
})
export default class App extends Vue {
  created() {
    Store.dispatch("initialize");
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
