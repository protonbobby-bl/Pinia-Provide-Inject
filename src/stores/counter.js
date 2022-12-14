import { ref, computed, readonly  } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  function decrement() {
    count.value--;
  }

  return { count: readonly(count), doubleCount, increment, decrement };
});
