<template>
    <div>
      <div class="mb-10">
        <h1>Comandos del canal</h1>
      </div>
      <ModalComp :show="isOpen" @close-event="closeModal">
        <h1>Hola soy un titulo</h1>
        <div>
            <p>soy el cuerpo</p>
        </div>
      </ModalComp>
      <CustomButton @click="openModal">Nuevo comando</CustomButton>
      <div class="grid grid-cols-1">
        <div>
          <h2>Listado</h2>
        </div>
        <CommandTable/>
      </div>
      <div class="grid grid-cols-1">
        <div></div>
      </div>
    </div>
  </template>
  
  <script>
  import ModalComp from '../components/ModalComp.vue'
  import CustomButton from '../components/CustomButton.vue';
  import CommandTable from '../components/CommandTable.vue';
  export default {
    name: 'CommandsView',
    components: { ModalComp, CustomButton, CommandTable },
    setup() {

    },
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      openModal() {
        this.isOpen = true;
      },
      closeModal(val) {
        this.isOpen = val;
      },
    },
  };
  </script>
  
  <style scoped>

  </style>