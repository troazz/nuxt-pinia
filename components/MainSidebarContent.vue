<script setup>
const menus = [
  { text: 'Dashboard', icon: 'fas fa-home', link: '/dashboard' },
  { text: 'File Manager', icon: 'fas fa-file-archive', link: '/data' },
  {
    text: 'Master Data',
    icon: 'fas fa-database',
    items: [
      { text: 'Category', icon: 'fas fa-check', link: '/user' },
      { text: 'Posts', icon: 'fas fa-tasks', link: '/user' },
      { text: 'User', icon: 'fas fa-user', link: '/user' },
      { text: 'Role', icon: 'fas fa-cog', link: '/role' },
    ],
  },
]
</script>

<template>
  <div>
    <div class="sidebar-brand">
      <nuxt-link to="/"> STISLA </nuxt-link>
    </div>
    <div class="sidebar-brand sidebar-brand-sm">
      <nuxt-link to="/">
        <img src="~/assets/img/logo.png" alt="logo" width="30" />
      </nuxt-link>
    </div>

    <ul class="sidebar-menu">
      <template v-for="(menu, index) in menus">
        <main-sidebar-menu :key="`menu-${index}`" :menu="menu" />
        <template v-for="(submenu, subindex) in menu.items">
          <main-sidebar-menu :key="`sub-${subindex}`" :menu="submenu" />
        </template>
      </template>
    </ul>
  </div>
</template>
