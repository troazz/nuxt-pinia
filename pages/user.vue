<script setup>
import { useMenuStore } from '@/store/menu'
import { useUserStore } from '@/store/user'

// PAGE
const menuStore = useMenuStore()
menuStore.setActiveMenu({ menu: 'master.user' })

// TABLE
const { $helper } = useNuxtApp()
const userStore = useUserStore()
const route = useRoute()
const initParams = {
  sort: 'name',
  order: 'asc',
  query: '',
  page: 1,
  limit: $helper.limitOptions()[0].value,
}
const params = ref({ ...initParams, ...route.query })
const reactiveQuery = computed(() => ({ ...route.query }))

const fields = [
  {
    key: 'name',
    label: 'Nama',
    sortable: true,
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
  },
  {
    key: 'role',
    label: 'Role',
    sortable: false,
  },
]

const {
  data: users,
  pending: loading,
  refresh,
} = useLazyAsyncData('users', async () => {
  return await userStore.fetch({ ...params.value })
})

function sort(ctx) {
  params.value = {
    ...params.value,
    sort: ctx.sortBy,
    order: ctx.sortDesc ? 'desc' : 'asc',
  }
}

function clearFilter() {
  params.value = { ...params.value, page: 1, query: '' }
}

watch(
  params,
  () => {
    navigateTo({
      path: '/user',
      query: $helper.sanitizeParams({
        ...params.value,
      }),
    })
  },
  { deep: true }
)

watch(
  reactiveQuery,
  () => {
    params.value = { ...initParams, ...reactiveQuery.value }
    refresh()
  },
  { immediate: true }
)

// FORM
</script>

<template>
  <div>
    <b-card body-class="p-0" footer-class="text-right">
      <template #header>
        <div class="card-header-form">
          <b-input-group>
            <b-form-input
              id="filter-input"
              v-model="params.query"
              placeholder="Cari disini"
              debounce="500"
            ></b-form-input>
            <b-input-group-append class="input-group-btn">
              <b-button :disabled="!params.query" @click="clearFilter()"
                ><i class="fas fa-eraser"></i
              ></b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
      </template>
      <b-table
        stacked="md"
        :fields="fields"
        :items="users?.data"
        :busy="loading"
        :sort-by="params.sort"
        :sort-desc="params.order === 'desc' ? true : false"
        striped
        show-empty
        no-sort-reset
        @sort-changed="sort"
      >
        <template #empty>
          <table-blank-loader :busy="loading"></table-blank-loader>
        </template>
        <template #cell(role)="data">
          <div v-for="(role, index) in data.item.roles" :key="`role${index}`">
            <b-badge variant="success">{{ role.name }}</b-badge>
          </div>
        </template>
      </b-table>
      <template #footer>
        <b-row>
          <b-col>
            <div class="form-inline">
              <b-form-group label="Show" label-for="show">
                <b-select
                  v-model="params.limit"
                  class="ml-2"
                  :options="$helper.limitOptions()"
                  size="sm"
                  @input="params.page = 1"
                ></b-select>
              </b-form-group>
            </div>
          </b-col>
          <b-col class="text-right">
            <div class="d-inline-block">
              <b-pagination
                v-model="params.page"
                :total-rows="users?.meta?.total"
                :per-page="params.limit"
                :disabled="loading"
                align="fill"
                size="sm"
                class="my-0"
              ></b-pagination>
            </div>
          </b-col>
        </b-row>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'IndexUser',
}
</script>
