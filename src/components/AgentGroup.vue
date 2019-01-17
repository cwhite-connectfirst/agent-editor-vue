<template>
    <b-card :title="agentGroupName" class="agent-group">                
        <b-list-group class="agent-group-list">
            <b-list-group-item v-for="agentId of agentGroup.agents" v-bind:key="agentId">
                <Agent :agent-id="agentId"/>
            </b-list-group-item>
        </b-list-group>
    </b-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Getter} from "vuex-class";

import {AgentGroup as IAgentGroup} from "../store/types";
import {getters} from "../store";
import Agent from "./Agent.vue";

@Component({
    props: {
        agentGroupId: Number
    },
    components: {Agent},
})
export default class AgentGroup extends Vue {
    getAgentGroupById: (id: number) => IAgentGroup = getters.getAgentGroupById(this.$store);

    get agentGroup() {
        return this.getAgentGroupById((<any>this).agentGroupId);
    }

    get agentGroupName() {
        return this.agentGroup.groupName;
    }
}
</script>

<style>
 .agent-group {
     margin: 20px;
     width: 400px;
     flex-grow: 0;
     flex-shrink: 0;
 }
</style>