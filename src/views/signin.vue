<template>
	<v-container
		fluid
		style="margin-top:20px"
	>
		<v-layout justify-space-between>
			<v-flex xs12>
			</v-flex>
			<v-flex grow="">
				<span>
					<app-panel
						width="500"
						noratio
						:loading="loading ? 'orange' : false"
					>
						<template slot="title">
							<v-icon left>mdi-key</v-icon>Iniciar Sesion
						</template>
						<app-login-form
							v-model="loginform"
							:disabled="loading ? true : false"
						></app-login-form>
						<v-card-text v-if="passrecover">
							<v-layout>
								<v-flex>
									<center>
										<v-btn
											color="orange"
											x-small=""
											style="text-transform:capitalize"
											text
										>No recuerdas tu contraseña?</v-btn>
									</center>
								</v-flex>
							</v-layout>
						</v-card-text>
						<v-card-text v-if="loginsocial">
							<v-layout>
								<v-flex>
									<center>
										<v-btn
											color="indigo"
											:disabled="loading"
											@click="loginfacebook"
										>
											<v-icon left>mdi-facebook</v-icon>Entrar
										</v-btn>
										&nbsp;
										<v-btn
											color="red"
											:disabled="loading"
											@click="logingmail"
										>
											<v-icon left>mdi-google</v-icon>Entrar
										</v-btn>
									</center>
								</v-flex>
							</v-layout>
						</v-card-text>
						<v-divider></v-divider>
						<v-card-actions>
							<v-layout row>
								<v-flex
									grow
									xs4
									offset-xs4
								>
									<center>
										<v-btn
											:loading="loading"
											:disabled="valid || loading"
											color="primary"
											@click="submit"
										>
											<v-icon left>mdi-login</v-icon>Acceder
										</v-btn>
									</center>
								</v-flex>
							</v-layout>
						</v-card-actions>
					</app-panel>
				</span>
			</v-flex>
			<v-flex xs12>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import loginform from '@/components/shared/input/login';

export default {
  components: {
    'app-login-form': loginform
  },
  data: () => ({
    loginform: {
      user: 'saotand@gmail.com',
      pass: 'd0708aca'
    },
    loginsocial: false,
    passrecover: false,
    noclosesesion: false
  }),
  computed: {
    loading () {
      return this.$store.getters.ui_g_loading;
    },
    valid () {
      return !this.loginform.user || !this.loginform.pass;
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('user_a_login', { email: this.loginform.user, pass: this.loginform.pass });
    }
  }
};
</script>

<style>
</style>
