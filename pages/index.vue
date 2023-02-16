<script setup>
import { useCounterStore } from '@/store/counter'

const counterStore = useCounterStore()
</script>
<template>
  <div>
    <div class="text-center font-weight-bold">
      {{ counterStore.count }}
      <button @click="counterStore.increment">increment</button>
      <button @click="counterStore.decrement">decrement</button>
    </div>
    <example-tutorial />
  </div>
</template>

<script>
export default {
  auth: false,
}
</script>
