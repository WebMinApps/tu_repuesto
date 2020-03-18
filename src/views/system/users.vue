<template>

	<app-section
		icon="mdi-account-group"
		title="Usuarios"
	>
		<template slot="buttons">
			<v-btn icon>
				<v-icon>mdi-refresh</v-icon>
			</v-btn>
		</template>
		<app-users-list
			v-model="selected"
			:headers="headers"
			:items="users"
			key-item="doc"
			:singleselect="false"
			show-select
			:dense="dense"
		></app-users-list>
		{{selected}}
	</app-section>
</template>

<script>
export default {
  data: () => ({
    selected: [],
    dense: false,
    users: [
      {
        image: null,
        name: 'David',
        last: 'Salinas',
        email: 'saotand@gmail.com',
        doc: '15879381',
        level: '0',
        phone: '04163231120'
      }
    ],
    headers: [
      {
        text: 'Imagen',
        align: 'center',
        sortable: false,
        value: 'image',
      },
      {
        text: 'Nombre',
        value: 'name'
      },
      {
        text: 'Apellido',
        value: 'last'
      },
      {
        text: 'E-mail',
        value: 'email'
      },
      {
        text: 'Identidad',
        value: 'doc'
      },
      {
        text: 'Tipo',
        value: 'level'
      },
      {
        text: 'Telefono',
        value: 'phone'
      },
      {
        text: 'Actions',
        value: 'action',
        sortable: false
      }
    ]
  }),
  computed: {

  },
  watch: {

  },
  created () {

  },
  methods: {

  }
};

</script>

<style>
</style>
