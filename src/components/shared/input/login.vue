<template>
	<v-container fluid>
		<v-layout column>
			<v-flex>
				<v-text-field
					v-model="login.user"
					:disabled="disabled ? true : false"
					prepend-icon="mdi-account"
					label="E-Mail"
					:append-outer-icon="'mdi-account-box-multiple'"
				></v-text-field>
			</v-flex>
			<v-flex>
				<v-text-field
					v-model="login.pass"
					:disabled="disabled ? true : false"
					prepend-icon="mdi-lock"
					:type="ptype"
					label="Contraseña"
					:append-outer-icon="picon"
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
        user: '',
        pass: '',
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
      keep: false
    },
    showpass: false
  }),
  computed: {
    ptype () {
      return this.showpass ? 'text' : 'password';
    },
    picon () {
      return this.showpass ? 'mdi-eye-off' : 'mdi-eye';
    }
  },
  created () {
    this.login = this.value;
  },
  methods: {
    update () {
      this.emit('input', this.login);
    },
  }
};
</script>

<style>
</style>
