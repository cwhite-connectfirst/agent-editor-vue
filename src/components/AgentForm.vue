<template>
    <div>
        <h3>{{formAction}} Agent</h3>
        <b-form>
            <b-form-group label="First Name">
                <b-form-input type="text" v-model="form.firstName"/>
            </b-form-group>

            <b-form-group label="Last Name">
                <b-form-input type="text" v-model="form.lastName"/>
            </b-form-group>

            <b-form-group label="User Name">
                <b-form-input type="text" v-model="form.username"/>
            </b-form-group>

            <b-form-group label="Is Active">
                <b-form-checkbox v-model="form.isActive"/>
            </b-form-group>
        </b-form>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {AgentDetails} from "../store/types";
import AgentApi from "../api/agents";

interface AgentForm {
    firstName: AgentDetails["firstName"];
    lastName: AgentDetails["lastName"];
    isActive: AgentDetails["active"];
    username: AgentDetails["username"];
}

@Component({
    props: {
        formAction: String,
        agentGroupId: Number,
        agentId: Number
    }
})
export default class AddEditAgent extends Vue {
    formAction: string = "Edit";
    $props!: {
        formAction: string;
        agentGroupId: number;
        agentId: number;
    };

    private _agentDetails!: AgentDetails;

    private setAgentDetails(newDetails: AgentDetails) {
        this._agentDetails = newDetails;
        const {firstName, lastName, isActive, username} = newDetails;
        this.data().form = {...this.data().form, firstName, lastName, isActive, username};
    }

    async created() {
        const agentDetailed = await AgentApi.getAgentDetails(this.$props.agentGroupId, this.$props.agentId);
    }

    data() {
        return {
            form: {
                firstName: "",
                lastName: "",
                isActive: false,
                username: ""
            }
        }
    }
}

</script>