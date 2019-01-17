import Vue from "vue";
import Vuex, {StoreOptions} from "vuex";

import agents, {getters as agentGetters, actions as agentActions, mutations as agentMutations} from "./modules/agents";
import {RootState} from "./types/RootState";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {version: '1.0.0'},
    modules: {agents}
}

export const getters: typeof agentGetters = {...agentGetters};
export const actions: typeof agentActions = {...agentActions};
export const mutations: typeof agentMutations = {...agentMutations};

export default new Vuex.Store<RootState>(store);