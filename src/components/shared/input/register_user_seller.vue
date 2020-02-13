<template>
	<v-layout>
		<v-flex
			xs12
			sm8
		>
			<v-text-field
				id="rif"
				v-model="value.name"
				name="sellername"
				label="Nombre o Razón Social"
				type="text"
				required
			></v-text-field>
		</v-flex>
		<v-flex
			xs12
			sm4
		>
			<app-fileinput
				v-model="value.image"
				base64
				placeholder="Foto (Logo y Fachada)"
			></app-fileinput>
		</v-flex>
		<v-flex xs2>
			<v-select
				v-model="value.nac"
				:items="nacsg"
				:rules="[v => !!v || 'Coloca nacionalidad']"
				required
			></v-select>
		</v-flex>
		<v-flex xs4>
			<v-text-field
				id="rif"
				v-model="value.rif"
				name="rif"
				label="Rif"
				type="text"
				required
				mask="########-#"
			></v-text-field>
		</v-flex>
		<v-flex xs6>
			<v-text-field
				id="telefonos"
				v-model="value.phone"
				name="telefonos"
				label="Teléfono de la Empresa"
				type="text"
				required
				hint="(####) - ### ####"
				mask="(####) - ### ####"
			></v-text-field>
		</v-flex>
		<v-flex xs6>
			<v-text-field
				id="city"
				v-model="value.city"
				name="city"
				label="Ciudad"
				type="text"
				required
			></v-text-field>
		</v-flex>
		<v-flex xs6>
			<v-text-field
				id="address"
				v-model="value.address"
				name="address"
				label="Dirección"
				type="text"
				required
				counter="300"
			></v-text-field>
		</v-flex>
	</v-layout>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: false,
      default: () => ({
        name: 'Empresa XXX',
        image: [],
        rif: '123123123',
        nac: 'J',
        phone: '12311231212',
        city: 'Somewhere Somehow',
        address: 'House on the ground'
      })
    },
    data: () => ({

    }),
    computed: {
      docs () {
        return [
          { text: 'Cedula', value: 'C' },
          { text: 'Pasaporte', value: 'P' },
          { text: 'RIF', value: 'R' }
        ];
      },
    }
  }
};
</script>

<style>
</style>
