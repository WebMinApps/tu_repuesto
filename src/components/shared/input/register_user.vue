<template>
	<v-container>
		<v-layout :style="stylecss">
			<v-stepper
				v-model="pasos"
				:style="stylecss"
				style="width:100%"
			>
				<v-stepper-header
					v-if="(userdata.level !== 1 && userdata.level !== 2 && userdata.level !== 5)"
					:style="stylecss"
				>
					<v-stepper-step
						step="1"
						:complete="pasos > 1"
						:color="(pasos > 1) ? 'success ' : 'primary'"
					>
						<center>
							{{$t('signup.form.list.buyorsell.item')}}<br>
							<small v-if="pasos > 1">{{userdata.level ? $t('signup.form.list.buyorsell.form.sell') : $t('signup.form.list.buyorsell.form.buy')}}</small>
						</center>
					</v-stepper-step>
					<v-divider></v-divider>
					<v-stepper-step
						step="2"
						:complete="pasos > 2"
						:color="(pasos > 2) ? 'success ' : 'primary'"
					>
						<center>
							{{$t('signup.form.list.register.item')}}<br>
							<small v-if="pasos > 2">{{$t('signup.form.complete')}}</small>
						</center>
					</v-stepper-step>
					<v-divider></v-divider>
					<v-stepper-step
						step="3"
						:complete="pasos > 3"
						:color="(pasos > 3) ? 'success ' : 'primary'"
					>
						<center>
							{{$t('signup.form.list.userterms.item')}}<br>
							<small v-if="pasos > 3">{{$t('signup.form.complete')}}</small>
						</center>
					</v-stepper-step>
				</v-stepper-header>
				<v-stepper-header
					v-else
					:style="stylecss"
				>
					<v-stepper-step
						:complete="pasos > 1"
						step="1"
						:color="(pasos > 1) ? 'success' : 'primary'"
					>
						<center>
							{{$t('signup.form.list.buyorsell.item')}}
							<small v-if="pasos > 1"><br>({{userdata.level ? 'Vender' : 'Comprar'}})</small></center>
					</v-stepper-step>
					<v-divider></v-divider>
					<v-stepper-step
						:complete="pasos > 2"
						step="2"
						:color="(pasos > 2) ? 'success' : 'primary'"
					>
						<center> {{$t('signup.form.list.register.item')}}<small v-if="pasos > 2"><br>{{$t('signup.form.complete')}}</small></center>
					</v-stepper-step>
					<v-divider></v-divider>
					<v-stepper-step
						:complete="pasos > 3"
						step="3"
						:color="(pasos > 3) ? 'success' : 'primary'"
					>
						<center>{{$t('signup.form.list.company.item')}}<small v-if="pasos > 3"><br>{{$t('signup.form.complete')}}</small></center>
					</v-stepper-step>
					<v-divider></v-divider>
					<v-stepper-step
						:complete="pasos > 4"
						step="4"
						:color="(pasos > 4) ? 'success' : 'primary'"
					>
						<center>
							{{$t('signup.form.list.userprofile.item')}}
							<small v-if="pasos > 4"><br>{{$t('signup.form.complete')}}</small></center>
					</v-stepper-step>
					<v-divider></v-divider>
					<v-stepper-step
						:complete="pasos > 5"
						step="5"
						:color="(pasos > 5) ? 'success' : 'primary'"
					>
						<center> {{$t('signup.form.list.userterms.item')}}
							<small v-if="pasos > 5"><br>.</small></center>
					</v-stepper-step>
				</v-stepper-header>
				<!-- Secciones de la pagina -->
				<v-stepper-items v-if="!userdata.level">
					<v-stepper-content step="1">
						<v-container>
							<v-layout row>
								<v-flex xs12>
									<center>
										<h1>{{$t('signup.form.list.buyorsell.form.do')}}</h1><br><br>
									</center>
								</v-flex>
								<v-flex
									xs12
									sm6
									class="mb-5"
								>
									<center>
										<v-btn
											dark
											class="buy_gradient"
											style="height:200px;width:200px; border-radius:40px"
											@click="do_action(0)"
										>
											<v-container>
												<v-layout column>
													<v-flex xs12>
														<v-icon size="110">mdi-cart</v-icon>
													</v-flex>
													<v-flex xs12>
														<h1>{{$t('signup.form.list.buyorsell.form.buy')}}</h1>
													</v-flex>
												</v-layout>
											</v-container>
										</v-btn>
									</center><br><br>
								</v-flex>
								<v-flex
									xs12
									sm6
									class="mb-5"
								>
									<center>
										<v-btn
											style="height:200px;width:200px;border-radius:40px"
											dark
											class="sell_gradient"
											@click="do_action(1)"
										>
											<v-container>
												<v-layout column>
													<v-flex xs12>
														<v-icon size="110">mdi-currency-usd</v-icon>
													</v-flex>
													<v-flex xs12>
														<h1>{{$t('signup.form.list.buyorsell.form.sell')}}</h1>
													</v-flex>
												</v-layout>
											</v-container>
										</v-btn>
									</center><br><br>
								</v-flex>
							</v-layout>
						</v-container>
					</v-stepper-content>
					<v-stepper-content step="2">
						<v-container
							grid-list-lg
							align-content-center
							text-xs-center
						>
							<v-layout row>
								<v-flex xs12>
									<center>
										<h3>{{$t('signup.form.list.register.form.data')}}</h3>
									</center>
									<app-register-user-data v-model="userdata"></app-register-user-data>
								</v-flex>
								<v-flex xs6>
									<center>
										<v-btn @click="prevStep">
											<v-icon
												left
												small
											>mdi-arrow-left-bold</v-icon>
											{{$t('signup.form.prev')}}
										</v-btn>
									</center>
								</v-flex>
								<v-flex xs6>
									<center>
										<v-btn
											color="primary"
											:disabled="proxpaso"
											@click="nextStep"
										>
											{{$t('signup.form.next')}}
											<v-icon
												right
												small
											>mdi-arrow-right-bold</v-icon>
										</v-btn>
									</center>
								</v-flex>
							</v-layout>
						</v-container>
					</v-stepper-content>
					<v-stepper-content step="3">
						<v-container
							grid-list-lg
							text-xs-center
							align-content-center
						>
							<v-layout row>
								<v-flex xs12>
									<center>
										<h3>Terminos y Condiciones del sitio</h3>
									</center>
									<v-divider></v-divider>
									<br />
									<br />
									<div v-html="termstext"></div>
								</v-flex>
								<v-flex xs12>
									<center>
										<v-checkbox
											v-model="terms"
											style="width:50%"
											label="Estoy de acuerdo con los terminos y condiciones del uso de este sitio"
											color="primary"
										></v-checkbox>
									</center>
								</v-flex>
								<v-flex xs6>
									<center>
										<v-btn @click="prevStep">
											<v-icon
												left
												small
											>mdi-arrow-left-bold</v-icon>
											{{$t('signup.form.next')}}
										</v-btn>
									</center>
								</v-flex>
								<v-flex xs6>
									<center>
										<v-btn
											color="primary"
											:disabled="!terms"
											@click="onSignUp"
										>Aceptar <v-icon right>mdi-check-bold</v-icon>
										</v-btn>
									</center>
								</v-flex>
							</v-layout>
						</v-container>
					</v-stepper-content>
					<v-stepper-content step="4">
						<center>
							<img
								src="@/assets/img/gracias.png"
								class="img-responsive"
							/>
							<h2>Gracias por registrarte!</h2>
							<br />
							<center>
								<v-btn
									color="primary"
									to="signin"
								>Ingresar</v-btn>
							</center>
							<br />
							<br />
						</center>
					</v-stepper-content>
				</v-stepper-items>
				<!-- Secciones de la pagina -->
				<v-stepper-items v-else>
					<v-stepper-content
						step="1"
						:dark="dark"
					>
						<v-container>
							<v-layout row>
								<v-flex xs12>
									<center>
										<h1>{{$t('signup.form.list.buyorsell.form.do')}}</h1><br><br>
									</center>
								</v-flex>
								<v-flex
									xs12
									sm6
									class="mb-5"
								>
									<center>
										<v-btn
											dark
											:class="'active'"
											class="buy_gradient"
											style="height:200px;width:200px; border-radius:40px"
											elevation-10
											@click="do_action(0)"
										>
											<v-container>
												<v-layout column>
													<v-flex xs12>
														<v-icon size="110">mdi-cart</v-icon>
													</v-flex>
													<v-flex xs12>
														<h1>{{$t('signup.form.list.buyorsell.form.buy')}}</h1>
													</v-flex>

												</v-layout>
											</v-container>

										</v-btn>
									</center><br><br>
								</v-flex>
								<v-flex
									xs12
									sm6
									class="mb-5"
								>
									<center>
										<v-btn
											style="height:200px;width:200px;border-radius:40px"
											dark
											class="sell_gradient"
											@click="do_action(1)"
										>
											<v-container>
												<v-layout column>
													<v-flex xs12>
														<v-icon size="110">mdi-currency-usd</v-icon>
													</v-flex>
													<v-flex xs12>
														<h1>{{$t('signup.form.list.buyorsell.form.sell')}}</h1>
													</v-flex>
												</v-layout>
											</v-container>
										</v-btn>
									</center><br><br>
								</v-flex>
							</v-layout>
						</v-container>
					</v-stepper-content>
					<v-stepper-content
						step="2"
						:dark="dark"
					>
						<v-container
							grid-list-lg
							align-content-center
							text-xs-center
						>
							<v-layout row>
								<v-flex xs12>
									<center>
										<h3>{{$t('signup.form.list.register.form.data')}}</h3>
									</center>
									<app-register-user-data v-model="userdata"></app-register-user-data>
								</v-flex>
								<v-flex xs6>
									<center>
										<v-btn @click="prevStep">
											<v-icon
												left
												small
											>mdi-arrow-left-bold</v-icon>{{$t('signup.form.prev')}}
										</v-btn>
									</center>
								</v-flex>
								<v-flex xs6>
									<center>
										<v-btn
											color="primary"
											:disabled="proxpaso"
											@click="nextStep"
										>
											{{$t('signup.form.next')}}
											<v-icon
												right
												small
											>mdi-arrow-right-bold</v-icon>
										</v-btn>
									</center>
								</v-flex>
							</v-layout>
						</v-container>
					</v-stepper-content>
					<v-stepper-content
						step="3"
						:dark="dark"
					>
						<v-container
							grid-list-lg
							align-content-center
							text-xs-center
						>
							<v-layout
								row
								wrap
							>
								<v-flex xs12>
									<center>
										<h3>{{$t('signup.form.list.company.form.data')}}</h3>
									</center>
								</v-flex>
								<v-flex xs12>
									<app-register-user-seller v-model="userdata.seller"></app-register-user-seller>
								</v-flex>
								<v-flex xs6>
									<center>
										<v-btn @click="prevStep">
											<v-icon
												left
												small
											>mdi-arrow-left-bold</v-icon> {{$t('signup.form.prev')}}
										</v-btn>
									</center>
								</v-flex>
								<v-flex xs6>
									<center>
										<v-btn
											color="primary"
											:disabled="proxpaso"
											@click="nextStep"
										>
											{{$t('signup.form.next')}}
											<v-icon
												right
												small
											>mdi-arrow-right-bold</v-icon>
										</v-btn>
									</center>
								</v-flex>
							</v-layout>
						</v-container>
					</v-stepper-content>
					<v-stepper-content
						:style="stylecss"
						step="4"
						:dark="dark"
					>
						<v-container>
							<v-layout>
								<v-flex xs12>
									<center>
										<h3>{{$t('signup.form.list.userprofile.form.data1')}}</h3>
									</center>
								</v-flex>
							</v-layout><br>
							<v-layout>
								<v-flex
									v-if="tabs === 0"
									xs12
								>
									<center>
										<h3>{{$t('signup.form.list.userprofile.form.data2')}}</h3>
										[1/2]
										<h5>{{$t('signup.form.list.userprofile.form.data3')}}</h5>
									</center>
								</v-flex>
								<v-flex
									v-else
									xs12
								>
									<center>
										<h3>{{$t('signup.form.list.userprofile.form.data4')}}</h3>
										[1/2]
									</center>
								</v-flex>
							</v-layout>
							<br>
						</v-container>
						<v-tabs
							v-model="tabs"
							:background-color="dark ? '#303030' : ''"
							:dark="dark"
							:slider-color="dark ? '#303030' : '#FFFFFF'"
							:style="stylecss"
						>
							<v-spacer v-show="showtabs"></v-spacer>
							<v-tab
								v-show="showtabs"
								:dark="dark"
								ripple
								:style="stylecss"
							>{{$t('forms.brands')}}</v-tab>
							<v-spacer v-show="showtabs"></v-spacer>
							<v-tab
								v-show="showtabs"
								:style="stylecss"
								:dark="dark"
								ripple
							>{{$t('forms.terms.parts')}}</v-tab>
							<v-spacer v-show="showtabs"></v-spacer>
							<v-tab-item
								:dark="dark"
								:style="stylecss"
							>
								<v-card
									:dark="dark"
									class="mb-5"
								>
									<v-container>
										<v-layout>
											<app-register-user-brands v-model="selbrands"></app-register-user-brands>
										</v-layout>
									</v-container>
								</v-card><br>
							</v-tab-item>
							<v-tab-item
								:dark="dark"
								:style="stylecss"
							>
								<v-container>
									<v-layout>
										<app-register-user-parts v-model="selparts"></app-register-user-parts>
									</v-layout>
								</v-container><br>
							</v-tab-item>
						</v-tabs>
						<v-layout>
							<v-flex
								v-if="tabs"
								xs6
							>
								<center>
									<v-btn @click="prevTab">
										<v-icon
											left
											small
										>mdi-arrow-left</v-icon> {{$t('signup.form.prev')}}
									</v-btn>
								</center>
							</v-flex>
							<v-flex
								v-else
								xs6
							>
								<center>
									<v-btn @click="prevStep">
										<v-icon
											left
											small
										>mdi-arrow-left-bold</v-icon> {{$t('signup.form.prev')}}
									</v-btn>
								</center>
							</v-flex>
							<v-flex
								v-if="tabs < 1"
								xs6
							>
								<center>
									<v-btn
										color="primary"
										:disabled="!selbrands.length"
										@click="nextTab"
									>
										{{$t('signup.form.next')}}
										<v-icon
											right
											small
										>mdi-arrow-right</v-icon>
									</v-btn>
								</center>
							</v-flex>
							<v-flex
								v-else
								xs6
							>
								<center>
									<v-btn
										color="primary"
										:disabled="!selbrands.length || !selparts.length"
										@click="nextStep"
									>
										{{$t('signup.form.next')}}
										<v-icon
											right
											small
										>mdi-arrow-right-bold</v-icon>
									</v-btn>
								</center>
							</v-flex>
						</v-layout>
					</v-stepper-content>
					<v-stepper-content step="5">
						<v-container grid-list-lg>
							<v-layout
								row
								wrap
							>
								<v-flex xs12>
									<h3>Terminos y Condiciones del sitio</h3>
									<v-divider></v-divider>
									<br />
									<br />
									<div v-html="termstext"></div>
								</v-flex>
								<v-flex
									xs12
									sm10
									md8
									lg6
									offset-sm-1
									offset-md-2
									offset-lg3
								>
									<p align="center">
										<center>
											<v-checkbox
												v-model="terms"
												label="Estoy de acuerdo con los terminos y condiciones del uso de este sitio"
												color="primary"
											></v-checkbox>
										</center>
									</p>
								</v-flex>
								<v-flex xs6>
									<center>
										<v-btn @click="prevStep">
											<v-icon
												left
												small
											>fa-arrow-left</v-icon> {{$t('signup.form.prev')}}
										</v-btn>
									</center>
								</v-flex>
								<v-flex xs6>
									<center>
										<v-btn
											color="primary"
											:disabled="!terms"
											@click="onSignUp"
										>Registrar</v-btn>
									</center>
								</v-flex>
							</v-layout>
						</v-container>
					</v-stepper-content>
					<v-stepper-content step="6">
						<center>
							<img
								src="@/assets/img/gracias.png"
								class="img-responsive"
							/>
							<h2>Gracias por registrarte!</h2>
							<br />
							<center>
								<v-btn
									color="primary"
									to="signin"
								>Ingresar</v-btn>
							</center>
							<br />
							<br />
						</center>
					</v-stepper-content>
				</v-stepper-items>
			</v-stepper>
		</v-layout>
	</v-container>
</template>

<script>
export default {
  data: () => ({
    showtabs: true,
    tabs: 0,
    pasos: 1,
    userdata: {
      redirect: false,
      email: 'saotand@gmail.com',
      pass: 'd0708aca.',
      confirmpass: 'd0708aca.',
      doc: '15879381',
      doctype: 'C',
      nac: 'V',
      name: 'David',
      last: 'Salinas',
      level: 0,
      phone: '(0416) 323 11 20',
      birth: '1983-04-13',
      active: '0',
      verified: '0',
      image: [],
      seller: {
        name: 'Empresa XXX',
        image: [],
        rif: '123123123',
        nac: 'J',
        phone: '12311231212',
        city: 'Somewhere Somehow',
        address: '123'
      },
      profile: []
    },
    selbrands: [],
    selparts: [],
    showlevel: false,
    terms: false,
    termstext: '<p align="justify"> Officia ut laboris exercitation aute eiusmod labore. Voluptate nostrud non aliquip voluptate duis Lorem minim deserunt aliqua. Ullamco culpa qui consequat adipisicing aliqua occaecat. </p> <p align="justify">Ut Lorem sunt ea elit ex dolore veniam esse. Minim ea tempor ea elit labore laborum labore do deserunt do nulla. Ipsum minim sint consequat elit amet occaecat proident sint labore. Quis laborum tempor non magna sunt velit veniam do adipisicing Lorem cupidatat duis laborum nisi. Anim ea ut eu commodo tempor incididunt proident pariatur. Dolore sit tempor ut eu elit. Sunt reprehenderit est esse Lorem tempor magna officia Lorem officia mollit consequat est. </p> <p align="justify"> Sunt dolore excepteur cillum amet proident nulla sunt excepteur do eu anim velit aliqua irure. Consequat sunt commodo anim tempor labore ad voluptate. Aliqua eiusmod consectetur anim esse culpa.</p> <p align="justify"> Ea irure aliqua officia est in. Eiusmod amet duis irure non mollit quis esse nulla cillum. Labore elit ex exercitation officia do non occaecat laborum ea ea do officia nulla anim. Duis ullamco dolor cillum duis sit occaecat ut do duis eu dolor. Eiusmod magna id ncididunt sunt magna sunt qui.</p> <p align="justify">Officia anim dolor quis nulla nisi ad cillum dolore cillum magna aliquip nostrud. Ullamco ea et ad ex laboris excepteur nulla quis eiusmod consequat ea est ut in. Ea labore sit irure occaecat ullamco. Elit Lorem labore aliquip eiusmod dolore ad consequat anim pariatur. Amet culpa aute et non sit est laboris nostrud dolore laboris eu aliqua non mollit.</p>'
  }),
  computed: {
    dark () {
      return this.$store.getters.ui_g_dark;
    },
    stylecss () {
      return { 'background-color': this.dark ? '#303030' : '#FFFFFF' };
    },
    proxpaso () {
      let condition;
      if (this.pasos == 2) {
        condition = this.userdata.email.length < 1 ||
					this.userdata.name.length <= 2 ||
					this.userdata.last.length <= 2 ||
					this.userdata.doc.length <= 7
        ;
      } else if (this.pasos == 3) {
        condition = !this.userdata.seller.name;
      }
      return condition;
    },
    profiled () {
      return this.userdata.profile.length;
    },
    loading () {
      return !this.$store.getters.ui_g_loading;
    }
  },
  watch: {
    selbrands () {
      this.userdata.profile = this.selbrands.concat(this.selparts);
    },
    selparts () {
      this.userdata.profile = this.selbrands.concat(this.selparts);
    },
    'userdata.level' (value) {
      this.do_action(value, false);
    }
  },
  created () {
  },
  methods: {
    start () {
      this.pasos = 1;
    },
    nextStep () {
      this.pasos++;
    },
    prevStep () {
      this.pasos--;
    },
    do_action (who, nomove = true) {

      if (this.showlevel) {
        this.userdata.level = who;
      } else {
        if (who === 1) {
          this.userdata.level = 1;
        } else {
          this.userdata.level = 0;
        }
      }
      if (nomove) {
        this.nextStep();
      }
    },
    nextttab () {
      if (this.tabs === 0) {
        if (this.selbrands > 0) {
          return false;
        } else {
          return true;
        }
      } else {
        if (this.selparts > 1) {
          return false;
        } else {
          return true;
        }
      }
    },
    resetform () {
      this.userdata.email = '';
      this.userdata.pass = '';
      this.userdata.confirmpass = '';
      this.userdata.doc = '';
      this.userdata.doctype = '';
      this.userdata.nac = '';
      this.userdata.name = '';
      this.userdata.last = '';
      this.userdata.level = '';
      this.userdata.phone = '';
      this.userdata.birth = '';
      this.userdata.created = '';
      this.userdata.active = '';
      this.userdata.verified = '';
    },
    prevTab () {
      const tabs = parseInt(this.tabs);
      this.tabs = tabs > 0 ? tabs - 1 : 0;
    },
    nextTab () {
      const tabs = parseInt(this.tabs);
      this.tabs = tabs < 3 ? tabs + 1 : 0;
    },
    onSignUp () {
      this.$store.dispatch('user_a_register', this.userdata);
      if (this.ecolor == 'success') {
        this.nextStep();
      }
    }
  }
};
</script>

<style>
.buy_gradient {
	/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#a90329+0,8f0222+44,6d0019+100;Brown+Red+3D */
	background: #a90329; /* Old browsers */
	background: -moz-linear-gradient(
		top,
		#a90329 0%,
		#8f0222 44%,
		#6d0019 100%
	); /* FF3.6-15 */
	background: -webkit-linear-gradient(
		top,
		#a90329 0%,
		#8f0222 44%,
		#6d0019 100%
	); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(
		to bottom,
		#a90329 0%,
		#8f0222 44%,
		#6d0019 100%
	); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a90329', endColorstr='#6d0019',GradientType=0 ); /* IE6-9
  */
}

.sell_gradient {
	/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#627d4d+0,1f3b08+100;Olive+3D */
	background: #627d4d; /* Old browsers */
	background: -moz-linear-gradient(
		top,
		#627d4d 0%,
		#1f3b08 100%
	); /* FF3.6-15 */
	background: -webkit-linear-gradient(
		top,
		#627d4d 0%,
		#1f3b08 100%
	); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(
		to bottom,
		#627d4d 0%,
		#1f3b08 100%
	); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#627d4d', endColorstr='#1f3b08',GradientType=0 ); /* IE6-9 */
}
</style>
