
<template>
	<v-layout
		row
		wrap
	>

		<v-flex
			xs6
			sm4
			md3
		>
			<v-text-field
				id="name"
				v-model="userdata.name"
				name="name"
				label="Nombre"
				type="text"
				required
			></v-text-field>
		</v-flex>

		<v-flex
			xs6
			sm4
			md3
		>
			<v-text-field
				id="last"
				v-model="userdata.last"
				name="last"
				label="Apellido"
				type="text"
				required
			></v-text-field>
		</v-flex>

		<v-flex
			xs6
			sm4
			md3
		>
			<app-input-date
				v-model="userdata.birth"
				name="birth"
				label="Fecha de Nacimiento"
			>
			</app-input-date>
		</v-flex>

		<v-flex
			xs6
			sm4
			md3
		>
			<app-fileinput
				v-model="userdata.image"
				base64
				placeholder="Foto"
			></app-fileinput>
		</v-flex>

		<v-flex
			xs6
			sm4
			md3
		>
			<v-text-field
				id="telefono"
				v-model="userdata.phone"
				v-mask="masktel"
				name="telefono"
				label="Teléfono"
				type="tel"
				required
				:hint="masktel"
			></v-text-field>
		</v-flex>

		<v-flex
			xs6
			sm4
			md3
		>
			<v-select
				v-model="userdata.doctype"
				item-value="value"
				:items="docs"
				:rules="[v => !!v || 'Coloca el tipo de documento']"
				label="Documento"
				hint="Tipo de documento de identificación"
				required
			></v-select>
		</v-flex>

		<v-flex
			xs4
			sm5
			md3
		>
			<v-select
				v-model="userdata.nac"
				item-value="value"
				:items="nacs"
				:rules="[v => !!v || 'Coloca nacionalidad']"
				label
				required
			></v-select>
		</v-flex>

		<v-flex
			xs8
			sm7
			md3
		>
			<v-text-field
				id="cedula"
				v-model="userdata.doc"
				v-mask="maskdoc"
				name="cedula"
				label="Cedula"
				type="text"
				hint="Numero de documento"
				:rules="[v => !!v || 'Coloca tu ' + doctypelabel ,docused]"
				required
				@input="onBlurDoc(userdata.doc)"
				@blur="onBlurDoc(userdata.doc)"
			></v-text-field>
		</v-flex>

		<v-flex
			:xs12="!showlevel"
			:xs6="showlevel"
			:sm12="!showlevel"
			:sm6="showlevel"
			:md4="!showlevel"
		>
			<v-text-field
				id="email"
				v-model="userdata.email"
				name="email"
				label="Correo electrónico"
				type="email"
				hint="Tu correo será verificado"
				required
				:rules="[emailmessage,emailused]"
				@input="onBlurEmail(userdata.email)"
				@blur="onBlurEmail(userdata.email)"
			></v-text-field>
		</v-flex>

		<v-flex
			v-show="showlevel"
			xs6
			md6
		>
			<v-select
				v-model="userdata.level"
				item-value="value"
				:items="niveles"
				label="Nivel de acceso"
				required
				persistent-hint
			></v-select>
		</v-flex>

		<v-flex
			xs6
			sm6
			:md4="!showlevel"
			:md6="showlevel"
		>
			<v-text-field
				id="password"
				v-model="userdata.pass"
				name="password"
				label="Contraseña"
				type="password"
				:rules="[minlength]"
				required
			></v-text-field>
		</v-flex>
		<v-flex
			xs6
			sm6
			:md4="!showlevel"
			:md6="showlevel"
		>
			<v-text-field
				id="confirmpassword"
				v-model="userdata.confirmpass"
				name="confirmpassword"
				label="Confirmar la Contraseña"
				type="password"
				:rules="[comparePasswords]"
			></v-text-field>
		</v-flex>
	</v-layout>
</template>

<script>
/* eslint-disable no-console */

import common from '@/lib/common.js';
import axios from 'axios';

export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        ID: null,
        email: '',
        pass: '',
        confirmpass: '',
        doc: '',
        doctype: '',
        nac: '',
        name: '',
        last: '',
        level: 0,
        phone: '',
        birth: '',
        created: '',
        active: '',
        verified: '',
        image: []
      })
    },
    showlevel: {
      type: Boolean
    }
  },
  data: () => ({
    userdata: {
      ID: null,
      email: '',
      pass: '',
      confirmpass: '',
      doc: '',
      doctype: '',
      nac: '',
      name: '',
      last: '',
      level: 0,
      phone: '',
      birth: '',
      created: '',
      active: '',
      verified: '',
      image: []
    },
    docused: false,
    emailused: false,
    maskdoc: '#########',
    masktel: '(####) ### ####',
    doctypelabel: 'tipo de Documento'
  }),
  computed: {
    loading () {
      return this.$store.getters.ui_g_loading;
    },
    emailformatted () {
      return common.formatEmail(this.userdata.email);
    },
    emailmessage () {
      return this.emailformatted ? false : 'Escribe un formato de email válido';
    },
    niveles () {
      return [
        { text: 'Usuario', value: 0 },
        { text: 'Vendedor', value: 1 },
        { text: 'Mayorista', value: 2 },
        { text: 'Agente', value: 3 },
        { text: 'Supervisor', value: 4 },
        { text: 'Administrador', value: 5 }
      ];
    },
    docs () {
      return [
        { text: 'Cedula', value: 'C' },
        { text: 'Pasaporte', value: 'P' },
        { text: 'RIF', value: 'R' }
      ];
    },
    nacs () {
      return [
        {
          text: 'V',
          value: 'V'
        },
        {
          text: 'E',
          value: 'E'
        }
      ];
    },
    cpp () {
      return this.userdata.pass != this.userdata.confirmpass ? true : false;
    },
    comparePasswords () {
      return this.cpp ? 'Las contraseñas deben ser iguales' : false;
    },
    pml () {
      return this.userdata.pass.length < 6 ? true : false;
    },
    minlength () {
      return this.pml ? 'Minimo 6 caracteres' : false;
    }
  },
  watch: {
    value (value) {
      this.userdata = value;
      console.log(value);
    },
    userdata () {
      this.$emit('input', this.userdata);
    }
  },
  updated () {
    this.userdata = this.value;
  },
  created () {
    this.userdata = this.value;
  },
  methods: {
    onBlurDoc (cData, allowed = '') {
      let data = { doc: cData };
      if (cData != allowed) {
        let url = common.url('user/check');
        if (cData.length > 6) {
          axios
            .post(url, data)
            .then(response => {
              let exists = common.getdata(response);
              if (exists) {
                this.docused = 'Ya Existe';
              } else {
                this.docused = false;
              }
            })
            .catch(error => {
              // capturamos el error y lo mostramos
              let message = common.error(error);
              this.$store.dispatch('ui_a_error', message);
            })
            .then();
        }
      }
    },
    onBlurEmail (cData, allowed = '') {
      let data = { email: cData };
      let url = common.url('user/check');
      if (this.emailformatted) {
        if (cData != allowed) {
          axios
            .post(url, data)
            .then(response => {
              let exists = response.data.data;
              if (exists) {
                this.emailused = 'Ya Existe';
              } else {
                this.emailused = false;
              }
            })
            .catch(error => {
              // capturamos el error y lo mostramos
              let message = common.error(error);
              this.$store.dispatch('ui_a_error', message);
            })
            .then();
        }
      }
    }
  }
};
</script>

<style>
</style>
