<template>
  <div id="app">
    <AgentGroups/>

    <modal :name="addEditAgentModalName" :scrollable="true" height="auto">
      <AgentForm :agent-id="modalData.agentId" :agent-group-id="modalData.agentGroupId" :form-action="modalData.formAction"/>
    </modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AgentGroups from "./components/AgentGroups.vue";
import AgentForm, {FormActions} from "./components/AgentForm.vue";
import {actions} from "./store";
import ModalNames from "./utils/modal-names";

import EventEmitter, {OPEN_ADD_EDIT_MODAL, OpenAddEditModalData} from "./events";

@Component({
  components: {
    AgentGroups,
    AgentForm
  },
})
export default class App extends Vue {
  created() {
    actions.initialize(this.$store);
    EventEmitter.$on(OPEN_ADD_EDIT_MODAL, this.onOpenAddEditModal);
  }

  destroyed() {
    EventEmitter.$off(OPEN_ADD_EDIT_MODAL, this.onOpenAddEditModal);
  }

  modalData: OpenAddEditModalData & {formAction: string} = {
    agentId: -1,
    agentGroupId: -1,
    formAction: FormActions.EDIT
  };

  onOpenAddEditModal(payload: OpenAddEditModalData) {
    this.modalData = {...this.modalData, ...payload};
    this.$modal.show(ModalNames.ADD_EDIT_AGENT);
  }

  get addEditAgentModalName() {
    return ModalNames.ADD_EDIT_AGENT;
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
