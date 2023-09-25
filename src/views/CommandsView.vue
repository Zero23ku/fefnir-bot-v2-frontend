<template>
    <div>
      <div class="mb-10">
        <h1>Comandos del canal</h1>
      </div>
      <ModalComp :show="isOpen" @close-event="closeModal">
        <h1 class="text-black flex justify-center">Hola soy un titulo</h1>
        <div class="flex items-center">
          <label for="comando" class="block text-gray-700 font-bold mb-2 mr-2">
            Comando
          </label>
        <input type="text" id="comando" placeholder="!comando"
               class="shadow appearance-none border rounded w-full py-2 px-3 
                    text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    
        </div>
        <div class="flex items-center mt-5">
          <label for="mensaje" class="block text-gray-700 font-bold mb-2 mr-2">
            Mensaje
          </label>
        <textarea type="text" id="mensaje" placeholder="Soy un mensaje"
               class="shadow appearance-none border rounded w-full py-2 px-3 
                    text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    
        </div>
        <div class="flex items-center mt-5">
          <label for="rolUsuario" class="text-gray-700 font-bold mr-2">
            Rol de Usuario
          </label>
          <div class="relative w-full">
            <select id="rolUsuario" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="mockup1">Mockup 1</option>
              <option value="mockup2">Mockup 2</option>
              <option value="mockup3">Mockup 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7z"/></svg>
            </div>
          </div>
        </div>
        <div class="mt-5 flex items-center">
            <label for="cooldown" class="text-gray-700 font-bold mr-2">
              Cooldown
            </label>
            <div class="w-full pt-[25px]">
              <input type="range" v-model="cooldownValue" id="cooldown" min="5" max="300" class="w-full" />
              <span>{{ cooldownValue }} segundos</span>
            </div>
            
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
  import { ref } from 'vue';
  export default {
    name: 'CommandsView',
    components: { ModalComp, CustomButton, CommandTable },
    setup() {
      const cooldownValue = ref(5);

      return { cooldownValue }
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