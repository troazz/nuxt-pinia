<script setup>
const { $auth, $toast } = useNuxtApp()
const initialErrors = {
  email: '',
  password: '',
}
const isSubmitting = ref(false)
const credential = ref({
  email: '',
  password: '',
})
const errors = ref({ ...initialErrors })

useHead({
  title: 'Login',
})

const handleSubmit = (e) => {
  isSubmitting.value = true
  navigateTo('/dashboard')
}
</script>

<template>
  <section class="section">
    <b-container class="mt-5">
      <b-row>
        <div
          class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4"
        >
          <div class="login-brand">
            <img src="~/assets/img/logo.png" alt="logo" width="100" />
          </div>

          <b-card class="card-primary">
            <template #header>
              <h4>Login</h4>
            </template>
            <b-form @submit.prevent="handleSubmit">
              <b-form-group
                id="email"
                label="Email"
                label-for="email"
                :invalid-feedback="errors.email"
                :state="errors.email ? false : null"
              >
                <b-form-input
                  id="email"
                  v-model="credential.email"
                  :state="errors.email ? false : null"
                  trim
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="password"
                label="Password"
                label-for="password"
                :invalid-feedback="errors.password"
                :state="errors.password ? false : null"
              >
                <b-form-input
                  id="password"
                  v-model="credential.password"
                  type="password"
                  :state="errors.password ? false : null"
                  trim
                ></b-form-input>
              </b-form-group>

              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg btn-block"
                  tabindex="3"
                  :disabled="isSubmitting"
                >
                  <template v-if="isSubmitting"
                    ><i class="fa fa-spinner fa-spin"></i> Loading...</template
                  >
                  <template v-else>Login</template>
                </button>
              </div>
            </b-form>
          </b-card>
          <div class="simple-footer">Copyright &copy; Puas Citro</div>
        </div>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  auth: 'guest',
  layout: 'blank',
}
</script>
