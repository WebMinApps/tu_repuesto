<template>
	<v-container>
		<v-layout row>
			<v-flex
				xs12
				sm8
			>
				<v-text-field
					id="rif"
					v-model="seller.name"
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
					v-model="seller.image"
					base64
					placeholder="Foto (Logo y Fachada)"
				></app-fileinput>
			</v-flex>
			<v-flex xs2>
				<v-select
					v-model="seller.nac"
					:items="nacsg"
					:rules="[v => !!v || 'Coloca nacionalidad']"
					required
				></v-select>
			</v-flex>
			<v-flex xs4>
				<v-text-field
					id="rif"
					v-model="seller.rif"
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
					v-model="seller.phone"
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
					v-model="seller.city"
					name="city"
					label="Ciudad"
					type="text"
					required
				></v-text-field>
			</v-flex>
			<v-flex xs6>
				<v-text-field
					id="address"
					v-model="seller.address"
					name="address"
					label="Dirección"
					type="text"
					required
					counter="300"
				></v-text-field>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: false,
      default: () => ({
        ID: '',
        name: '',
        image: [],
        rif: '',
        nac: '',
        phone: '',
        city: '',
        address: ''
      })
    },
    data: () => ({
      seller: {
        ID: '',
        name: '',
        image: [],
        rif: '',
        nac: '',
        phone: '',
        city: '',
        address: ''
      }
    }),
    created () {
      this.seller = this.value;
    },
    computed: {
      docs () {
        return [
          { text: 'Cedula', value: 'C' },
          { text: 'Pasaporte', value: 'P' },
          { text: 'RIF', value: 'R' }
        ];
      },
      nacsg () {
        return [
          {
            text: 'J',
            value: 'J'
          },
          {
            text: 'V',
            value: 'V'
          }
        ];
      },
    }
  }
};
</script>
