<template>
	<span>
		<v-data-table
			:headers="headers"
			:items="data"
			sort-by="nombre"
			class="elevation-0"
		>
			<template v-slot:item.image="{item}">
				<v-avatar
					color="#666666"
					class="ma-1"
					size="40"
				>
					<img
						v-if="item.image"
						:src="baseURL + item.image"
					>
					<v-icon v-else>mdi-account</v-icon>
				</v-avatar>
			</template>
			<template v-slot:item.level="{item}">
				{{usertype[item.level]}}
			</template>
			<template v-slot:item.action="{item}">
				<v-icon
					small
					class="mr-2"
					@click="editItem(item)"
				>mdi-edit</v-icon>
				<v-icon
					small
					@click="deleteItem(item)"
				>mdi-delete</v-icon>
			</template>
			<template v-slot:no-data>
				No se cargo la informacion
			</template>
		</v-data-table>
		<code>{{data}}</code>
	</span>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    headers: {
      type: Array,
      required: true,
      default: () => ([])
    },
    items: {
      type: Array,
      required: true,
      default: () => ([])
    }
  },
  data: () => ({
    data: [],
    usertype: ['Usuario', 'Vendedor', 'Mayorista', 'Agente', 'Supervisor', 'Administrador'],
    dialog: false,
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    }
  }),

  computed: {
    baseURL () {
      return axios.defaults.baseURL;
    },
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    }
  },

  watch: {
    dialog (val) {
      val || this.close();
    }
  },

  created () {
    this.initialize();
  },

  methods: {
    initialize () {
      this.data = this.items;
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem (item) {
      const index = this.desserts.indexOf(item);
      confirm('Are you sure you want to delete this item?') &&
				this.desserts.splice(index, 1);
    },

    close () {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>
