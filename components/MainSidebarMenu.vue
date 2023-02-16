<script setup>
const props = defineProps({
  menu: {
    type: Object,
    required: true,
  },
})

const { menu } = props
const hasItems = menu.items?.length > 0
</script>

<template>
  <li :class="{ 'menu-header': hasItems }">
    <template v-if="hasItems">
      {{ menu.text }}
    </template>
    <nuxt-link v-else :to="menu.link" class="nav-link">
      <i :class="menu.icon"></i><span>{{ menu.text }}</span></nuxt-link
    >
  </li>
</template>
