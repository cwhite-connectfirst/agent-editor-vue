<template>
    <div class="agent" @click="onClick">
        <span>
            {{agent.agentId}}
        </span>
        <span>
            {{agent.firstName}}
        </span>
        <span>
            {{agent.lastName}}
        </span>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Getter} from "vuex-class";

import {Agent as IAgent} from "../store/types";
import {getters} from "../store";
import EventEmitter, {OPEN_ADD_EDIT_MODAL, OpenAddEditModalData} from "../events";

@Component({
    props: {
        agentId: Number
    },
})
export default class Agent extends Vue {
    getAgentById: (id: number) => IAgent = getters.getAgentById(this.$store);

    get agent(): IAgent {
        return this.getAgentById((<any>this).agentId);
    }

    onClick() {
        EventEmitter.$emit(OPEN_ADD_EDIT_MODAL, {agentId: this.agent.agentId, agentGroupId: this.agent.agentGroupId});
    }
}
</script>