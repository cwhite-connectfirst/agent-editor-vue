import Vue from "vue";
import Vuex, {StoreOptions} from "vuex";

import agents from "./modules/agents";
import {RootState} from "./types/RootState";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {version: '1.0.0'},
    modules: {agents}
}

export default new Vuex.Store<RootState>(store);