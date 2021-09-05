<template >
  <Nav />

  <router-view v-if="!isMenu" />
  <Footer v-if="!isMenu"/>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  name: 'Home',
  components: {
    Nav,
    Footer
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      //store.dispatch("isMenu");
    });

    const isMenu = computed(() => store.state.isMenu);
    return { isMenu };
  },
}
</script>