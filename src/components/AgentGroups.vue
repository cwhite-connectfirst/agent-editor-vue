<template>
    <div id="agent-groups">
        <h1>Agent Groups</h1>
        <AgentGroup v-for="agentGroupId in agentGroupIds" v-bind:key="agentGroupId" :agent-group-id="agentGroupId"/>
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
#agent-groups {
    text-align: left;

    h1 {
        text-align: center;
    }
}
</style>