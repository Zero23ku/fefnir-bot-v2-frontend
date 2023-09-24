<template>
    <div class="h-full bg-[#469128]">
    <div class="grid grid-rows-1">
        <MenuItem itemmenu="Inicio" routermenu="/"/>
        <MenuItem itemmenu="Comandos" routermenu="/commands"/>
        <MenuItem itemmenu="Sonidos" routermenu="/sounds"/>
    </div>
    </div>
</template>

<script setup>
    import MenuItem from "./MenuItem.vue";
</script>
    
<style scoped>
    h2 {
        color: red;
    }
</style>