<template lang="">
    <RouterLink :to=routermenu class="transition-colors duration-300 h-[60px] bg-[#469128] hover:bg-[#f3ab27] target:bg-blue-600 flex items-center justify-center cursor-pointer">
        <p> {{ itemmenu }}</p>
    </RouterLink>
</template>
<script>
    import { RouterLink } from 'vue-router'
    export default {
        props: {
            itemmenu: String,
            routermenu: String,
        }
    }
</script>
<style lang="">
    
</style>