import swal from 'sweetalert2'

export default function ({ $axios, redirect }) {
  $axios.onError((error) => {
    const { $toast, $helper } = useNuxtApp()
    if (error.response !== undefined) {
      const { status, data, config } = error.response
      if (status === 400 && data.errors.length > 0) {
        const Toast = swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: data?.data?.file_review_url
            ? 'Download Reviewed File'
            : false,
          cancelButtonText: 'Tutup',
          width: '500px',
          iconColor: 'white',
          customClass: {
            popup: 'colored-toast',
          },
        })

        Toast.fire({
          icon: 'error',
          title: data.message,
          html:
            `<ul>` +
            data.errors.map((error) => `<li>${error}</li>`).join(' ') +
            `</ul>`,
        }).then((result) => {
          if (result.isConfirmed) {
            window.open(data?.data?.file_review_url)
          }
        })
      } else if (
        status === 401 &&
        config.url.includes('/auth/login') === false
      ) {
        $toast('Session anda telah habis, silahkan login kembali.', 'error')
        redirect('/login')
      } else if (status === 404 && data.message === 'Not Found.') {
        // Not Found
        redirect('/404')
      } else if (status === 403) {
        // Forbidden, redirect to index if they don't any permission to access
        redirect('/')
      } else if (status === 422) {
        $toast(data.message, 'error')
        throw error
      } else {
        $toast(
          'Oops...Something went wrong, Please contact administrator.',
          'error'
        )
      }
    } else if (
      error.message ===
      'Both token and refresh token have expired. Your request was aborted.'
    ) {
      $toast(
        'Session anda telah habis, mohon refresh halaman ini kembali.',
        'error'
      )
    } else {
      $toast(
        'Oops...Something went wrong, Please contact administrator.',
        'error'
      )
    }
  })
}
