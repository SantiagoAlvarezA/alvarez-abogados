<template>
  <div class="container mx-auto">

    <div id="homeImg" class="grid grid-cols-4 grid-rows-6 gap-1 h-screen -mb-30  justify-center">
  
      <img class="col-span-2 col-start-2 col-end-4 row-span-3 row-start-1 h-full w-full" src="../assets/logo-800x640.svg" alt="Alvarez bufete de abogados">
      <div class="col-span-2 text-black col-start-2 col-end-4 row-span-1 row-start-4  text-center"> 
        <button class="uppercase rounded-full bg-gray-500 py-1 px-4 text-white">
          Ver más
        </button>
      </div>
      <div class="col-span-2 text-black col-start-2 col-end-4 row-span-1 row-start-5 uppercase text-center self-center">
        <img class="mx-auto h-6 lg:h-10 w-8 lg:w-10" src="../assets/see-more.svg" alt="Ver mas" srcset="../assets/see-more.svg">
      </div>
    </div>

    <div class="items-center flex" v-for="item of items" :key="item.id">
     <!-- <p class="
          rounded
          flex
          absolute
          my-auto
          mx-6
          p-2
          bg-neutral
          text-justify text-primary-dark
          flex
          w-2/4
          items-center
          border"
      >
        {{ item.text }}
      </p>-->
      <img :src="item.url" alt="alt" :srcset="item.url" class="w-full z-index"/>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "Home",
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getData")
    });
    const items = computed(() => store.state.home);
    return { items};
  },
};
</script>