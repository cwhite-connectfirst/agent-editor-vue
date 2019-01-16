<template>
  <div id="app">
    <Agents/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Agents from "./components/Agents.vue";
import Store from "./store";

@Component({
  components: {
    Agents,
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
