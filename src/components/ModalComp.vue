<template>
    <Teleport to="body">
        <Transition
        enter-active-class="transition ease-out duration-200 transform"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-200 transform"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
            <div class="backdrop" v-show="showModal">
                <div class="modal-body" ref="modal">
                    <slot>Test</slot>
                    <br>
                    <button @click="closeModal">Cerrar</button>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script>
import {ref, watch} from 'vue';
import { onClickOutside } from '@vueuse/core';
export default {
    setup (props) {
        const showModal = ref(false);
        const modal = ref(null);
        watch(() => props.show, (show) => {
            showModal.value = show;
        });

        onClickOutside(modal,() => {
            if(showModal.value === true) {
                closeModal();
            }
        })

        function closeModal() {
            showModal.value = false;
        }
        return { showModal, closeModal, modal }
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        
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