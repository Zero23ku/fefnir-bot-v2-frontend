<template>
    <button class="bg-[#469128] transition-colors duration-300 hover:bg-[#f3ab27] 
                    flex items-center justify-center cursor-pointer text-white 
                    font-bold p-[10px] rounded-lg"
            :class="(isCancel) ? 'bg-red-400 transition-colors duration-300 hover:bg-red-700' : 'bg-[#469128] transition-colors duration-300 hover:bg-[#f3ab27]'">
        <slot>
            Sin contenido
        </slot>
    </button>
</template>

<script>
export default {
    name: 'CustomButton',
    setup () {
        

        return {}
    },
    props: {
        isCancel: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style scoped>

</style>