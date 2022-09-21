<script setup>
import parentComponent from "./components/ParentComponent.vue";
</script>

<template>
  <div class="text-xl m-4">Parent manages state with Pinia and passes data to descendants with provide/inject</div>
  <div class="text-l m-4">State is readonly. Only mutates from Pinia methods imported in parent and injected into descendants</div>
  <parent-component message="Parent component" />
  <parent-component message="Sibling component" />
</template>
