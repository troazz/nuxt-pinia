<template>
  <div>
    <h3>User from {{ text }} Component</h3>
    <p v-if="pending">Loading data...</p>
    <ul v-else>
      <li v-for="item in users?.data" :key="item.uuid">
        {{ item.name }}
        <a :href="`mailto:${item.email}`">{{ item.email }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UsersListOption',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      users: [],
      error: null,
      pending: false,
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      this.pending = true
      this.error = null
      try {
        this.users = await this.$axios.get('users').then((res) => res.data)
      } catch (error) {
        this.error = error
      }
      this.pending = false
    },
  },
}
</script>
