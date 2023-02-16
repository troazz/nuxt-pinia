export const useUserStore = defineStore('user', () => {
  const { $axios } = useNuxtApp()

  async function get(id) {
    try {
      const { data } = await $axios.$get(`users/${id}`)
      return data
    } catch (error) {
      return {}
    }
  }

  async function assignRoles(id, data) {
    const url = `users/${id}/assign-roles`
    try {
      const response = await $axios.$put(url, data)
      return { ...response }
    } catch (error) {
      return { success: false, ...error.response.data }
    }
  }

  async function fetch(parameters = {}) {
    return await $axios.$get('users', { params: parameters })
  }

  return {
    assignRoles,
    fetch,
    get,
  }
})
