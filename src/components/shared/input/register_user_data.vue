<template>
	<v-layout
		row
		wrap
	>
		<v-flex
			xs12
			sm6
			md3
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
				@blur="onBlurEmail(userdata.email)"
			></v-text-field>
		</v-flex>
		<v-flex
			xs12
			sm6
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
			xs12
			sm6
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
			xs12
			sm6
			md3
		>
			<app-fileinput
				v-model="userdata.image"
				base64
				placeholder="Foto"
			></app-fileinput>
		</v-flex>
		<v-flex xs5>
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
		<v-flex xs2>
			<v-select
				v-model="userdata.nac"
				item-value="value"
				:items="nacs"
				:rules="[v => !!v || 'Coloca nacionalidad']"
				label
				required
			></v-select>
		</v-flex>
		<v-flex xs5>
			<v-text-field
				id="cedula"
				v-model="userdata.doc"
				name="cedula"
				label="Cedula"
				type="text"
				hint="Numero de documento"
				:rules="[v => !!v || 'Coloca tu ' + doctypelabel ,docused]"
				mask="########"
				required
				@blur="onBlurDoc(userdata.doc)"
			></v-text-field>
		</v-flex>
		<v-flex xs6>
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
		<v-flex xs6>
			<v-text-field
				id="confirmpassword"
				v-model="userdata.confirmpass"
				name="confirmpassword"
				label="Confirmar la Contraseña"
				type="password"
				:rules="[comparePasswords]"
			></v-text-field>
		</v-flex>
		<v-flex
			v-show="showlevel"
			xs6
		>
			<v-select
				v-model="userdata.level"
				item-value="value"
				:items="niveles"
				:rules="[v => !!v || 'Establece el nivel de acceso']"
				label="Nivel de acceso"
				required
				persistent-hint
			></v-select>
		</v-flex>
		<v-flex xs6>
			<v-text-field
				id="telefono"
				v-model="userdata.phone"
				name="telefono"
				label="Teléfono"
				type="text"
				required
				:hint="mask"
				:mask="mask"
			></v-text-field>
		</v-flex>
		<v-flex xs6>
			<v-menu
				ref="menu1"
				v-model="menu1"
				:close-on-content-click="false"
				:nudge-right="40"
				transition="scale-transition"
				offset-y
				max-width="290px"
				min-width="290px"
			>
				<template v-slot:activator="{on}">
					<v-text-field
						id="birth"
						v-model="birthdateFormatted"
						readonly
						name="birth"
						label="Fecha de Nacimiento"
						type="text"
						hint
						persistent-hint
						prepend-icon="mdi-calendar-check"
						required
						v-on="on"
					></v-text-field>
				</template>
				<v-date-picker
					v-model="birthdate"
					:show-current="false"
					locale="es-es"
					:max="maxdate"
					:min="mindate"
					no-title
					@input="cmenu1"
				></v-date-picker>
			</v-menu>
		</v-flex>
	</v-layout>
</template>

<script>
import { mask } from 'vue-the-mask';
import axios from 'axios';
export default {
  directives: {
    mask
  },
  props: {
    value: {
      type: Object,
      required: false,
      default: () => ({
        ID: null,
        email: 'saotand@gmail.com',
        pass: '123123',
        confirmpass: '123123',
        doc: '15879381',
        doctype: 'C',
        nac: 'V',
        name: 'David',
        last: 'Salinas',
        level: 0,
        phone: '04163231120',
        birth: '1983-04-13',
        created: '',
        active: '1',
        verified: '0',
        image: []
      })
    }
  },
  data: () => ({
    userdata: {},
    birthdate: '0000-00-00',
    birthdateFormatted: '0000-00-00',
    menu1: false,
    showlevel: false,
    docused: false,
    emailused: false,
    mask: '(####) - ### ####'
  }),
  computed: {
    loading () {
      return !this.$store.getters.ui_g_loading;
    },
    emailformatted () {
      let regexemail = /^[a-zA-Z0-9!#$&*?^{}˜.Çç-]+(\.[a-zA-Z0-9!#$&*?^{}˜.Çç-]+)*@([a-zA-Z0-9]+([a-zA-Z0-9-]*)\.)+[a-zA-Z]+$/;
      let validemail = this.userdata.email.match(regexemail) ? true : false;
      return validemail;
    },
    emailmessage () {
      return this.emailformatted ? false : 'Escribe un formato de email válido';
    },
    niveles () {
      return [
        { text: 'usuario', value: '0' },
        { text: 'vendedor', value: '1' }
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
    mindate () {
      let ys = 80;
      return this.datediff(ys);
    },
    maxdate () {
      let ys = 18;
      return this.datediff(ys);
    },
    pml () {
      return this.userdata.pass.length < 6 ? true : false;
    },
    minlength () {
      return this.pml ? 'Minimo 6 caracteres' : false;
    },

  },
  watch: {
    userdata () {
      this.$emit('input', this.userdata);
    },
    birthdate () {
      this.birthdateFormatted = this.formatDate(this.birthdate);
      this.userdata.birth = this.birthdate;
    }
  },
  created () {
    this.userdata = this.value;
    this.birthdate = this.maxdate;
    this.birthdateFormatted = this.formatDate(this.maxdate);
  },
  methods: {
    datediff (ddiff = 80) {
      let dnow = new Date();
      let ystart = dnow.getFullYear() - ddiff;
      let mstart = dnow.getMonth();
      let dystart = dnow.getUTCDate();
      let dstart = new Date(ystart + '-' + (mstart + 1) + '-' + dystart);
      return this.$moment(dstart).format('YYYY-MM-DD');
    },
    onBlurDoc (cData) {
      let data = { doc: cData };
      let url = 'user/check';
      axios
        .post(url, data)
        .then(response => {
          let exists = response.data.data;
          if (exists) {
            this.docused = 'Ya Existe';
          } else {
            this.docused = false;
          }
        })
        .catch(error => {
          let message = '';
          if (error.response != undefined) {
            message = error.response.data.error.message;
            this.$store.dispatch('ui_a_error', message);
          } else {
            message = error;
            //commit("ui_m_warning", message);
          }
        })
        .then();
    },
    onBlurEmail (cData) {
      let data = { email: cData };
      let url = 'user/check';
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
          let message = '';
          if (error.response != undefined) {
            message = error.response.data.error.message;
          } else {
            message = error;
          }
          this.$store.dispatch('ui_a_error', message);
        })
        .then();
    },
    parseDate (date) {
      if (!date) return null;
      const [month, day, year] = date.split('/');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    },
    formatDate (date) {
      if (!date) return null;
      const [year, month, day] = date.split('-');
      return `${day}/${month}/${year}`;
    },
    cmenu1 () {
      this.menu1 = false;
    }
  }
};
</script>

<style>
</style>
