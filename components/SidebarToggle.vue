<script setup>
const isExpanded = ref(false)

function toggleExpand() {
  isExpanded.value = !isExpanded.value
}

watch(isExpanded, (val, prevVal) => {
  if (val) {
    document.body.classList.add('sidebar-mini')
  } else {
    document.body.classList.remove('sidebar-mini')
  }
})
</script>

<template>
  <div>
    <a
      href="#"
      class="nav-link nav-link-lg d-none d-xl-block"
      @click.prevent="toggleExpand()"
      ><i class="fas fa-bars"></i
    ></a>
    <a
      v-b-toggle.sidebar-backdrop
      href="#"
      class="nav-link nav-link-lg d-block d-xl-none"
      ><i class="fas fa-bars"></i
    ></a>
  </div>
</template>

<style>
.b-sidebar > .b-sidebar-header {
  z-index: 900;
}
</style>
