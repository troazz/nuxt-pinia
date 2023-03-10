import swal from 'sweetalert2'

export default ({ app }, inject) => {
  inject('toast', (message, type = 'success') => {
    const Toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', swal.stopTimer)
        toast.addEventListener('mouseleave', swal.resumeTimer)
      },
    })

    Toast.fire({
      icon: type,
      title: message,
    })
  })
}
