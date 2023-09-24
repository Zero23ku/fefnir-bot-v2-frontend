<template>
    <RouterLink :to="routermenu" 
                :class="( routermenu == currentRoute ) ? 'active' : 'bg-[#469128] transition-colors duration-300 hover:bg-[#f3ab27]'"
                class=" target:bg-blue-600 flex items-center justify-center cursor-pointer text-white font-bold h-[60px]">
        <p> {{ itemmenu }}</p>
    </RouterLink>
</template>
<script lang="ts">
    export default {
        props: {
            itemmenu: String,
            routermenu: String,
        },
        data() {
            return {
                currentrouter: String,
                itemrouter: String,
            }
        },
        methods: {
            activeMenu() {
                console.log(this.$route.name);
                console.log(this.currentrouter);
                if(this.routermenu === this.currentRoute()) {
                    return true;
                }
                return false;
            }
        },
        computed: {
            currentRoute() {
                return this.$route.path;
            }
        },
    }
</script>
<style>
    .active {
        background-color: violet;
    }
    
</style>