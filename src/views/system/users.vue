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
		<app-list
			v-model="selected"
			:headers="headers"
			item-key="name"
			:singleselect="false"
			show-select
			dense
		></app-list>
	</app-section>
</template>

<script>
export default {
  data: () => ({
    selected: [],
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
        text: 'email',
        value: 'email'
      },
      {
        text: 'Identidad',
        value: 'doc'
      },
      {
        text: 'Tipo',
        value: ''
      },
      {
        text: 'Protein (g)',
        value: 'protein'
      },
      {
        text: 'Iron (%)',
        value: 'iron'
      },
      {
        text: 'Actions',
        value: 'action',
        sortable: false
      }
    ]
  })
};

</script>

<style>
</style>
