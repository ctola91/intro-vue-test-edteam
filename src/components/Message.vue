<template>
  <div>{{ message }}</div>
</template>
<script>
// import { ref } from "vue";
export default {
  props: {
    message: String,
  },
  // setup() {
  //   const message = ref("Hola Mundo");

  //   return { message };
  // },
};
</script>
