<template>
    <div>
      <table class="w-full">
        <thead>
          <tr class="bg-[#2c571c] text-white font-bold">
            <th>Comando</th>
            <th>Contenido</th>
            <th>Rol de Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(command, index) in commmands" :key="index"
              :class="index % 2 === 0 ? 'bg-[#76b65d]' : 'bg-[#2c571c]'"
              class=" text-white font-bold">
            <td class="text-center">{{ command.command }}</td>
            <td class="text-center">{{ command.content }}</td>
            <td class="text-center">{{ command.userRole }}</td>
            <td class="text-center">
                <div class="flex justify-center">
                <CustomButton class="mr-[5px]">
                    <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                </CustomButton>
                <CustomButton :isCancel="true">
                    <font-awesome-icon icon="fa-solid fa-delete-left" />
                </CustomButton>
                </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>
  import CustomButton from './CustomButton.vue';
  export default {
    name: 'CommandTable',
    components: { CustomButton },
    data() {
      return {
        commmands: [
          { command: 1, content: 'Usuario 1', userRole: 'usuario1@example.com', actions: 'acciones' },
          { command: 2, content: 'Usuario 2', userRole: 'usuario1@example.com', actions: 'acciones' },
          { command: 3, content: 'Usuario 3', userRole: 'usuario1@example.com', actions: 'acciones' },
        ]
      };
    }
  };
</script>
<style scoped>
    th, td {
        padding: 10px;
    }
</style>