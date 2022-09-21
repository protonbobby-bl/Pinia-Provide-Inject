<template>
  <div class="p-2 m-4 text-5xl border border-white mb-16">
    <div class="flex items-center gap-2">
      <label>{{message}}</label>
      <button
        class="m-2 block bg-green-500 text-white border border-opacity-0 rounded-lg px-3 py-1.5 text-sm font-medium self-center w-max"
        @click="store.increment"
      >
        Mas
      </button>
      <span class="text-blue-500">Count: {{ store.count }} | </span>
      <span class="text-blue-500">Computed: {{ store.doubleCount }}</span>
    </div>

    <child-a />
  </div>
</template>

<script>
import childA from "./ChildA.vue";
import { provide } from "vue";
import { useCounterStore } from "../stores/counter";

export default {
  components: {
    childA,
  },
  props: {
    message: {
      type: String,
    },
  },
  setup() {
    const store = useCounterStore();

    provide("parent", store);
    
    return {
      store,
    };
  },
};
</script>
