<template>
    <Teleport to="body">
        <Transition
        enter-active-class="transition ease-out duration-200 transform"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-200 transform"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
            <div class="backdrop" v-show="show">
                <div class="modal-body" ref="modal">
                    <slot>Test</slot>
                    <br>
                    <CustomButton :isCancel="true" @click="closeModal">Cerrar</CustomButton>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import CustomButton from './CustomButton.vue';
export default {
    name: 'ModalComp',
    emits: ["close-event"],
    components: { CustomButton },
    setup (props, context) {
        const modal = ref(null);
        onClickOutside(modal,() => {
            if(props.show === true) {
                context.emit('close-event', false);
            }
        })

        return { modal }
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        closeModal() {
            this.$emit('close-event', false);
        }
    }
}
</script>

<style lang="css" scoped>
    .modal-body {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }

    .backdrop {
        top: 0%;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
</style>