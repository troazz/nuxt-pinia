import { saveAs } from 'file-saver'

export default ({ app, store }, inject) => {
  inject('helper', {
    ucwords(str) {
      return str.toLowerCase().replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase()
      })
    },
    sanitizeParams(params) {
      const param = {}
      for (const key in params) {
        if (params[key]) {
          param[key] = params[key]
        }
      }

      return param
    },
    limitOptions() {
      return [
        // { text: 1, value: 1 },
        // { text: 10, value: 10 },
        { text: 25, value: 25 },
        { text: 50, value: 50 },
        { text: 100, value: 100 },
        { text: 250, value: 250 },
      ]
    },
    years() {
      const { $moment } = useNuxtApp()

      const start = 2020
      const end = parseInt($moment().format('YYYY')) + 5
      const years = []
      for (let i = start; i <= end; i++) {
        years.push({ value: i, label: i })
      }

      return years
    },
    months() {
      const { $moment } = useNuxtApp()
      const year = new Date().getFullYear()
      const months = []
      for (let i = 1; i <= 12; i++) {
        months.push({
          value: i,
          label: $moment(`${year}-${i}-01`, 'YYYY-M-DD').format('MMMM'),
        })
      }

      return months
    },
    days() {
      const days = []
      for (let i = 1; i <= 31; i++) {
        days.push({ value: i, label: i })
      }
      return days
    },
    downloadBlob(resp, fname) {
      const headerLine = resp.headers['content-disposition']
      let filename = fname

      if (headerLine) {
        const startFileNameIndex = headerLine.indexOf('"') + 1
        const endFileNameIndex = headerLine.lastIndexOf('"')
        filename = headerLine.substring(startFileNameIndex, endFileNameIndex)
      }

      saveAs(new Blob([resp.data]), filename)
    },
  })
}
