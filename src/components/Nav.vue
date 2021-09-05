<template>
    <nav class="sticky bg-white top-0 z-50 flex items-center justify-between flex-wrap bg-white px-6 py-4">

        <div class="flex items-center flex-shrink-0 text-blue mx-auto lg:mr-6 lg:mx-0">
            <router-link class="tracking-tight" @click="restartMenu()" to="/">
                <img class="hidden sm:block" src="../assets/logo-horizontal-black-alvarez-bufete-de-abogados.svg" alt="Alvarez bufete de abogados">
                <img class="block sm:hidden" src="../assets/black-alvarez-bufete-de-abogados.svg" alt="Alvarez bufete de abogados">
            </router-link>
        </div>

        <div class="block lg:hidden"  @click="toggleClass()" >
            <img v-if="!isMenu" src="../assets/burger-menu-black.svg"  alt="Menu" srcset="../assets/burger-menu-black.svg">
            <img v-else src="../assets/exit-black.svg"   alt="Menu" srcset="../assets/exit-black.svg">
        </div>

        <div id="menu"  class="w-full lg:flex lg:items-center lg:w-auto hidden lg:block ">
            <div class="text-sm w-full lg:flex-grow py-10 lg:py-0">

                <router-link @click="restartMenu()" class="uppercase bg-black lg:bg-white block mt-4 lg:inline-block lg:mt-0 text-white lg:text-black hover:text-white  hover:bg-gray-500 rounded  lg:rounded-full py-4 lg:py-1 px-6 lg:px-3 lg:mr-2 text-center" to="/about">
                    Quiénes somos
                </router-link>

                <router-link @click="restartMenu()" class="uppercase bg-black lg:bg-white block mt-4 lg:inline-block lg:mt-0 text-white lg:text-black hover:text-white  hover:bg-gray-500 rounded  lg:rounded-full py-4 lg:py-1 px-6 lg:px-3 lg:mr-2 text-center" to="/whatwedo">
                    Qué hacemos
                </router-link>

                <router-link @click="restartMenu()" class="uppercase bg-black lg:bg-white block mt-4 lg:inline-block lg:mt-0 text-white lg:text-black hover:text-white  hover:bg-gray-500 rounded  lg:rounded-full py-4 lg:py-1 px-6 lg:px-3 lg:mr-2 text-center" to="/ourpeople">
                    Nuestra gente
                </router-link>
            </div>
        </div>

    </nav>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
    name:"Nav",
    methods: {
        toggleClass(){
            this.$store.dispatch('changeMenu');
            document.querySelector("#menu").classList.toggle("hidden");

        },
        restartMenu(){
            this.$store.dispatch('restartMenu');
            document.querySelector("#menu").classList.add("hidden");
        }
    },

    setup() {
        const store = useStore();

        onMounted(() => { });
        
        const isMenu = computed(() => store.state.isMenu);
        
        return { isMenu };
    },
    
    
    
}

</script>