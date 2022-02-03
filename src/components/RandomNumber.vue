<template>
  <div>
    <span>{{ randomNumber }}</span>
    <button @click="getRandomNumber">Generar numero aleatorio</button>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  props: {
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 10,
    },
  },
  setup(props) {
    const randomNumber = ref(0);

    const getRandomNumber = () => {
      randomNumber.value =
        Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
    };

    return {
      getRandomNumber,
      randomNumber,
    };
  },
}
</script>
