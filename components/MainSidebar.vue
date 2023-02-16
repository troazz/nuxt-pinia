<template>
  <div>
    <!-- MOBILE -->
    <b-sidebar id="sidebar-backdrop" backdrop shadow>
      <div class="main-sidebar w-100">
        <main-sidebar-content />
      </div>
    </b-sidebar>

    <!-- WEB -->
    <div class="main-sidebar sidebar-style-2 d-none d-xl-block">
      <aside id="sidebar-wrapper">
        <main-sidebar-content />
      </aside>
    </div>
  </div>
</template>
