<template>
    <div id="agent-groups-container">
        <h1>Agent Groups</h1>
        <div id="agent-groups">
            <AgentGroup v-for="agentGroupId in agentGroupIds" v-bind:key="agentGroupId" :agent-group-id="agentGroupId"/>
        </div>
    </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import {mapGetters} from "vuex";
import {State} from "vuex-class";

import AgentGroup from "./AgentGroup.vue";
import {AgentState} from "../store/modules/agents";

@Component({
    components: { AgentGroup }
})
export default class Agents extends Vue {
    @State agents!: AgentState;

    get agentGroupIds() {
        return this.agents.agentGroupIds;
    }
}
</script>

<style lang="scss">
h1 {
    text-align: center;
}

#agent-groups-container {
    max-width: 100vw;
}

#agent-groups {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 100%;
}
</style>