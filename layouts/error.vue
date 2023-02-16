<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
})
const router = useRouter()
</script>

<template>
  <section class="section">
    <div class="container mt-5">
      <div class="page-error">
        <div class="page-inner">
          <h1>{{ props.error.statusCode }}</h1>
          <div class="page-description">{{ props.error.message }}</div>
          <div class="page-search">
            <div class="mt-3">
              <button
                class="btn btn-secondary btn-lg font-weight-bold"
                @click.prevent="router.back()"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="simple-footer mt-5">Copyright &copy; Puas Citro</div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'blank',
}
</script>
