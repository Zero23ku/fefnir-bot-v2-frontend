<template>
    <div>
      <table>
        <thead>
          <tr class="bg-[#469128] text-white font-bold">
            <th>Comando</th>
            <th>Contenido</th>
            <th>Rol de Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(command, index) in commmands" :key="index"
              :class="index % 2 === 0 ? 'bg-[#76b65d]' : 'bg-[#e9c24e]'"
              class=" text-white font-bold">
            <td>{{ command.command }}</td>
            <td>{{ command.content }}</td>
            <td>{{ command.userRole }}</td>
            <td><font-awesome-icon icon="fa-solid fa-user-secret" /></td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>
  export default {
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