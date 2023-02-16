<script setup>
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
userStore.fetch()
</script>

<template>
  <div>
    <h3>User from Component</h3>
    <p v-if="userStore.isLoading">Loading data...</p>
    <ul>
      <li v-for="item in userStore.users" :key="item.uuid">
        {{ item.name }}
        <a :href="`mailto:${item.email}`">{{ item.email }}</a>
      </li>
    </ul>
    <a
      v-for="i in userStore.totalPage"
      :key="i"
      href="#"
      class="mx-2"
      @click.prevent="userStore.gotoPage(i)"
      >{{ i }}</a
    >
  </div>
</template>
