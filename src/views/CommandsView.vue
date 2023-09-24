<template>
    <div>
      <ModalComp :show="showModal">
        <h1>Hola soy un titulo</h1>
        <div>
            <p>soy el cuerpo</p>
        </div>
      </ModalComp>
      <button @click="toggleModal">Nuevo comando</button>
      <div class="grid grid-cols-1">
        <div>
          <h1>Comandos</h1>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div></div>
      </div>
    </div>
  </template>
  
  <script>
  import ModalComp from '../components/ModalComp.vue';
  import { ref } from 'vue';
  export default {
    name: 'CommandsView',
    components: { ModalComp },
    setup() {
        const showModal = ref(false);
        function toggleModal() {
            showModal.value = !showModal.value;
        };
        return { showModal, toggleModal };
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