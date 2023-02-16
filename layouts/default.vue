<template>
  <div class="main-wrapper">
    <div class="navbar-bg"></div>
    <top-navbar />
    <main-sidebar />

    <div class="main-content">
      <Nuxt />
    </div>

    <footer class="main-footer">
      <div class="footer-left">
        Copyright &copy; 2018
        <div class="bullet"></div>
        Puas Citro
      </div>
    </footer>
  </div>
</template>

<style scoped>
.main-footer {
  position: absolute;
  bottom: 0 !important;
  border: none;
}
</style>
