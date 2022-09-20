<template>
  <div class="p-2 m-4 text-2xl border border-white">  <div class="flex items-center gap-2">
      <label>Child C</label>
      <button
        class="m-2 block bg-red-500 text-white border border-opacity-0 rounded-lg px-3 py-1.5 text-sm font-medium self-center w-max"
        @click="store.decrement"
      >
        Menos
      </button>
      <span class="text-blue-500">Count: {{ store.count }} | </span>
      <span class="text-blue-500">Computed: {{ store.doubleCount }}</span>
    </div></div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const store = inject("parent");
    
    return {
      store,
    };
  },
};
</script>
