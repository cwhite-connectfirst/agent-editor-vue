<template>
    <div id="add-edit-agent-form">
        <h3>{{formTitle}}</h3>
        <b-form @submit.prevent="onSubmit">
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
                <b-form-checkbox v-model="form.active"/>
            </b-form-group>

            <b-button type="submit" variant="primary">Save</b-button>
            <b-button type="button" variant="secondary" @click="onClose">Close</b-button>
        </b-form>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {AgentDetails} from "../store/types";
import AgentApi from "../api/agents";
import ModalNames from "../utils/modal-names";

interface AgentForm {
    firstName: AgentDetails["firstName"];
    lastName: AgentDetails["lastName"];
    active: AgentDetails["active"];
    username: AgentDetails["username"];
}

export enum FormActions {
    ADD = "ADD",
    EDIT = "EDIT"
}

@Component({
    props: {
        formAction: {
            type: String,
            default: FormActions.EDIT
        },
        agentGroupId: Number,
        agentId: Number
    },
    data() {
        return {
            form: {
                firstName: "",
                lastName: "",
                active: false,
                username: ""
            }
        }
    }
})
export default class AddEditAgent extends Vue {
    $props!: {
        formAction: FormActions;
        agentGroupId: number;
        agentId: number;
    };

    $data!: { form: AgentForm }

    private _agentDetails!: AgentDetails;

    async created() {
        const agentDetailed = await AgentApi.getAgentDetails(this.$props.agentGroupId, this.$props.agentId);
        const {firstName, lastName, active, username} = agentDetailed; 
        this.$data.form = {...this.$data.form, firstName, lastName, active, username}
        this._agentDetails = agentDetailed;
    }

    get formTitle() {
        switch (this.$props.formAction) {
            case FormActions.ADD:
                return "Add Agent";
            case FormActions.EDIT:
            default:
                return "Edit Agent";
        }
    }
    
    async onSubmit(event: Event) {
        await AgentApi.updateAgentDetails({...this._agentDetails, ...this.$data.form});
        this.$modal.hide(ModalNames.ADD_EDIT_AGENT);
    }

    onClose() {
        this.$modal.hide(ModalNames.ADD_EDIT_AGENT);
    }
}
</script>

<style scoped lang="scss">
#add-edit-agent-form {
    padding: 20px;
}

button {
    margin-right: 12px;
}
</style>