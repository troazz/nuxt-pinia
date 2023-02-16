<template>
  <b-card title="Card title" sub-title="Card subtitle">
    <b-container fluid>
      <!-- User Interface controls -->
      <b-row>

        <!-- search box -->
        <b-col lg="8" class="my-1">
          <b-form-group>
            <b-input-group size="sm">
              <b-form-input
                id="filter-input"
                v-model="filter"
                type="search"
                placeholder="Type to Search"
              ></b-form-input>
              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col lg= "4" class="my-1">
          <b-form-group>
            <b-form-select
              id="per-page-select"
              v-model="perPage"
              :options="pageOptions"
              size="sm"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Main table element -->
      <b-table
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :filter-included-fields="filterOn"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        stacked="md"
        show-empty
        small
        @filtered="onFiltered"
      >
        <template #cell(creator)="row">
          {{ row.value.name }}
        </template>

        <template #cell(actions)="row">
          <b-button size="sm" @click="row.toggleDetails">
            {{ row.detailsShowing ? 'Hide' : 'Show' }}
          </b-button>
        </template>

        <template #row-details="row">
          <b-card>
            <ul>
              <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
            </ul>
          </b-card>
        </template>
      </b-table>

    </b-container>
    <div class="col col-sm-4">
      <b-col class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </div>
  </b-card>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            uuid: "96cfc28a-bb53-42fa-ab74-0e67ca810d25",
            code: "FRM2",
            name: "Form 2",
            creator: {
              uuid: "96c7ff79-2964-420b-b915-a69ac739414a",
              name: "Super Admin",
              email: "superadmin@email.com"
            }
          },
          {
            uuid: "96cfc28a-bb53-42fa-ab74-0e67ca810d25",
            code: "CCA32",
            name: "Percobaan Form",
            creator: {
              uuid: "96c7ff79-2964-420b-b915-a69ac739414a",
              name: "User",
              email: "superadmin@email.com"
            }
          },
          {
            uuid: "96cfc28a-bb53-42fa-ab74-0e67ca810d25",
            code: "CCA32",
            name: "Form Pengumpulan data tani",
            creator: {
              uuid: "96c7ff79-2964-420b-b915-a69ac739414a",
              name: "Admin 2",
              email: "eselon@email.com"
            }
          },
          {
            uuid: "96cfc28a-bb53-42fa-ab74-0e67ca810d25",
            code: "CCA32",
            name: "Form Pengumpulan data pembangunan",
            creator: {
              uuid: "96c7ff79-2964-420b-b915-a69ac739414a",
              name: "Admin 2",
              email: "superadmin@email.com"
            }
          },
          {
            uuid: "96cfc28a-bb53-42fa-ab74-0e67ca810d25",
            code: "CCA32",
            name: "Form Pengumpulan data cocok tanam",
            creator: {
              uuid: "96c7ff79-2964-420b-b915-a69ac739414a",
              name: "User",
              email: "superadmin@email.com"
            }
          },
          {
            uuid: "96cfc28a-bb53-42fa-ab74-0e67ca810d25",
            code: "CCA32",
            name: "Indonesia satu",
            creator: {
              uuid: "96c7ff79-2964-420b-b915-a69ac739414a",
              name: "User",
              email: "superadmin@email.com"
            }
          },
          {
            uuid: "96cfc28a-bb53-42fa-ab74-0e67ca810d25",
            code: "CCA32",
            name: "Kelapa Sawit",
            creator: {
              uuid: "96c7ff79-2964-420b-b915-a69ac739414a",
              name: "User",
              email: "superadmin@email.com"
            }
          },
          {
            uuid: "96cfc28a-bb53-42fa-ab74-0e67ca810d25",
            code: "CCA32",
            name: "Minyak Bumi",
            creator: {
              uuid: "96c7ff79-2964-420b-b915-a69ac739414a",
              name: "User",
              email: "superadmin@email.com"
            }
          },
          {
            uuid: "96cfc28a-bb53-42fa-ab74-0e67ca810d25",
            code: "CCA32",
            name: "Video Games",
            creator: {
              uuid: "96c7ff79-2964-420b-b915-a69ac739414a",
              name: "User",
              email: "superadmin@email.com"
            }
          },
          {
            uuid: "96cfc28a-bb53-42fa-ab74-0e67ca810d25",
            code: "CCA32",
            name: "Agama Di Indonesia",
            creator: {
              uuid: "96c7ff79-2964-420b-b915-a69ac739414a",
              name: "User",
              email: "superadmin@email.com"
            }
          },
          {
            uuid: "96cfc28a-bb53-42fa-ab74-0e67ca810d25",
            code: "CCA32",
            name: "Bali satu data",
            creator: {
              uuid: "96c7ff79-2964-420b-b915-a69ac739414a",
              name: "User",
              email: "superadmin@email.com"
            }
          },
          {
            uuid: "96cfc28a-bb53-42fa-ab74-0e67ca810d25",
            code: "CCA32",
            name: "Percobaan Form",
            creator: {
              uuid: "96c7ff79-2964-420b-b915-a69ac739414a",
              name: "User",
              email: "superadmin@email.com"
            }
          },
          {
            uuid: "96cfc28a-bb53-42fa-ab74-0e67ca810d25",
            code: "CCA32",
            name: "Percobaan Form",
            creator: {
              uuid: "96c7ff79-2964-420b-b915-a69ac739414a",
              name: "User",
              email: "superadmin@email.com"
            }
          },
          {
            uuid: "96cfc28a-bb53-42fa-ab74-0e67ca810d25",
            code: "CCA32",
            name: "Percobaan Form",
            creator: {
              uuid: "96c7ff79-2964-420b-b915-a69ac739414a",
              name: "User",
              email: "superadmin@email.com"
            }
          },
          {
            uuid: "96cfc1a7-1ec1-4576-a200-d201cd7e3d4a",
            code: "FRM1",
            name: "Form 1",
            creator: {
              uuid: "96c7ff79-2964-420b-b915-a69ac739414a",
              name: "Super Admin",
              email: "superadmin@email.com"
            }
          },
          {
            uuid: "96cfc191-0dff-4e81-902d-63b11fc41f38",
            code: "FRM1",
            name: "Form 1",
            creator: {
              uuid: "96c7ff79-2964-420b-b915-a69ac739414a",
              name: "Super Admin",
              email: "superadmin@email.com"
            }
          },
          {
            uuid: "96cfc0e0-a9d2-4ae2-b312-e5228eed8464",
            code: "FRM1",
            name: "Form 1",
            creator: {
              uuid: "96c7ff79-2964-420b-b915-a69ac739414a",
              name: "Super Admin",
              email: "superadmin@email.com"
            }
          }
        ],
        fields: [
          { key: 'name', label: 'Name', sortable: true, sortDirection: 'desc' },
          { key: 'code', label: 'Code', sortable: true, sortDirection: 'desc' },
          { key: 'creator', label: 'Created By' },
          { key: 'actions', label: 'Actions' }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15, { value: 100, text: "Shows all" }],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
    },
    methods: {
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
  }
</script>
