<template>
	<v-container fluid>
		<v-layout column>
			<v-flex>
				<v-text-field
					v-model="login.user"
					:disabled="disabled ? true : false"
					prepend-icon="mdi-account"
					:label="$t('signin.form.user')"
					:append-icon="'mdi-account-box-multiple'"
					:rules="userRules"
					@click:append="togglecontacts"
				></v-text-field>
			</v-flex>
			<v-flex>
				<v-text-field
					ref="passwordsel"
					v-model="login.pass"
					:disabled="disabled ? true : false"
					prepend-icon="mdi-lock"
					:type="ptype"
					:label="$t('signin.form.pass')"
					:rules="passwordRules"
					:append-icon="picon"
					@click:append="togglepass"
				></v-text-field>
			</v-flex>
			<v-flex
				v-if="noclosesession"
				offset-xs3
				xs3
			>
				<v-checkbox
					v-model="login.keep"
					label="No Cerrar La Session"
				></v-checkbox>

			</v-flex>
			<v-flex v-if="address">
				<v-layout row>
					<v-flex
						xs4
						offset-xs4
					>
						<v-checkbox
							v-model="login.remember"
							style="margin:0;padding:0;"
							:label="$t('signin.form.remember')"
						></v-checkbox>
					</v-flex>
				</v-layout>
			</v-flex>
		</v-layout>
		<v-dialog
			v-model="contacts"
			icon
			width="400"
			:dark="dark"
		>
			<app-panel>
				<template slot="title">
					<v-icon left>mdi-account</v-icon>{{$t('signin.accounts.window')}}
				</template>
				<template slot="buttons">
					<v-btn
						icon
						@click="togglecontacts"
					>
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</template>
				<v-list
					v-if="listedN"
					v-model="selaccount"
					three-line
					ripple
				>
					<template v-for="(item, index) in listed">
						<v-list-item :key="index">
							<v-list-item-avatar :color="ramdomcolor()">
								<v-img
									v-if="item.img"
									:src="item.avatar"
								></v-img>
								<v-icon v-else>mdi-account</v-icon>
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title v-html="item.user"></v-list-item-title>
								<v-list-item-subtitle v-html=" $t('signin.accounts.last') + item.access"></v-list-item-subtitle>
							</v-list-item-content>
							<v-list-item-action>
								<v-btn
									icon
									@click="selectuser(item.user)"
								>
									<v-icon>mdi-check</v-icon>
								</v-btn>
							</v-list-item-action>
							<v-list-item-action>
								<v-btn
									icon
									@click="trashuser(index)"
								>
									<v-icon>mdi-trash-can-outline</v-icon>
								</v-btn>
							</v-list-item-action>
						</v-list-item>
					</template>
				</v-list>
				<v-flex v-else>
					<center>{{$t('signin.accounts.empty')}}</center>
				</v-flex>
			</app-panel>
		</v-dialog>
	</v-container>
</template>
<script>
export default {
  props: {
    value: {
      type: Object,
      required: false,
      default: () => ({
        user: '',
        pass: '',
        remember: false,
        keep: false
      }),

    },
    noclosesession: {
      type: Boolean
    },
    disabled: {
      required: false
    }
  },
  data: () => ({
    login: {
      user: '',
      pass: '',
      remember: false,
      keep: false,
    },
    userRules: [
      user => !!user || 'Por favor ingresa tu correo',
      user => /^[a-zA-Z0-9!#$&*?^{}�.��-]+(\.[a-zA-Z0-9!#$&*?^{}�.��-]+)*@([a-zA-Z0-9]+([a-zA-Z0-9-]*)\.)+[a-zA-Z]+$/.test(user) || 'Escribe un correo valido'
    ],
    passwordRules: [],
    address: true,
    showpass: false,
    contacts: false,
    listed: [],
    selaccount: {}
  }),
  computed: {
    ptype () {
      return this.showpass ? 'text' : 'password';
    },
    picon () {
      return this.showpass ? 'mdi-eye-off' : 'mdi-eye';
    },
    typepass () {
      return this.showpass ? 'text' : 'password';
    },
    dark () {
      return this.$store.getters.ui_g_dark;
    },
    listedN () {
      return this.listed.length;
    },
    color () {
      return this.ramdomcolor();
    }
  },
  watch: {
    login () {
      this.$emit('input', this.login);
    }
  },
  created () {
    this.login = this.value;
  },
  methods: {
    selectuser (user) {
      this.login.user = user;
      this.login.pass = '';
      this.contacts = false;
    },
    trashuser (index) {
      let users = JSON.parse(sessionStorage.getItem('rem'));
      users.splice(index, 1);
      this.listed = users;
      sessionStorage.setItem('rem', JSON.stringify(users));
    },
    togglepass () {
      this.showpass = !this.showpass;
    },
    togglecontacts () {
      this.contacts = !this.contacts;
      let users = JSON.parse(sessionStorage.getItem('rem'));
      this.listed = users ? users : [];
    },
    aleatorio (inferior, superior) {
      let numPosibilidades = superior - inferior;
      let aleat = Math.random() * numPosibilidades;
      aleat = Math.round(aleat);
      return parseInt(inferior) + aleat;
    },
    ramdomcolor () {
      let hexadecimal = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F');
      let color_aleatorio = '#';
      for (let i = 0; i < 6; i++) {
        let posarray = this.aleatorio(0, hexadecimal.length - 1);
        color_aleatorio += hexadecimal[posarray];
      }
      return color_aleatorio;
    }
  }
};
</script>

<style>
</style>
