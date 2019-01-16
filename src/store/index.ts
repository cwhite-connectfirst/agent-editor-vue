import Vue from "vue";
import Vuex from "vuex";

import agents from "./modules/agents";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {agents}
});