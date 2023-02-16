export default function ({ $axios, redirect }) {
  $axios.onError((error) => {
    const { $toast } = useNuxtApp()
    const { status, data } = error.response
    if (status === 404 && data.message === 'Not Found.') {
      // Not Found
      redirect('/404')
    } else if (status === 403) {
      // Forbidden, redirect to index if they don't any permission to access
      redirect('/')
    } else if (status === 500) {
      $toast.global.error()
    }
  })
}
