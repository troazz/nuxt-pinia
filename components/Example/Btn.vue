<template>
  <button class="button" @click="$emit('click')">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  width: 10rem;
  border-radius: 10px;
  background: black;
  color: white;
  padding: 1rem;
  margin: 1rem auto;
}
</style>
