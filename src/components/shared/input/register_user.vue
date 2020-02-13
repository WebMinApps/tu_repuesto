<template>
	<v-container>
		<v-layout :style="{'background-color': dark ? '#303030' : '#FFFFFF'}">
			<v-stepper
				v-model="pasos"
				:style="{'background-color': dark ? '#303030' : '#FFFFFF','width': '100%'}"
			>
				<v-stepper-header
					v-if="!userdata.level"
					:style="{'background-color': dark ? '#303030' : '#FFFFFF'}"
				>
					<v-stepper-step
						step="1"
						:complete="pasos > 1"
						:color="(pasos > 1) ? 'success ' : 'primary'"
					>
						<center>
							Compras o Vendes?<br>
							<small v-if="pasos > 1">({{userdata.level ? 'Vender' : 'Comprar'}})</small>
						</center>
					</v-stepper-step>
					<v-divider></v-divider>
					<v-stepper-step
						step="2"
						:complete="pasos > 2"
						:color="(pasos > 2) ? 'success ' : 'primary'"
					>
						<center>
							Registro<br>
							<small v-if="pasos > 2">Completo</small>
						</center>
					</v-stepper-step>
					<v-divider></v-divider>
					<v-stepper-step
						step="3"
						:complete="pasos > 3"
						:color="(pasos > 3) ? 'success ' : 'primary'"
					>
						<center>
							Condiciones<br>
							<small v-if="pasos > 3">Completo</small>
						</center>
					</v-stepper-step>
				</v-stepper-header>
				<v-stepper-header
					v-else
					:style="{'background-color': dark ? '#303030' : '#FFFFFF'}"
				>
					<v-stepper-step
						:complete="pasos > 1"
						step="1"
						:color="(pasos > 1) ? 'success' : 'primary'"
					>
						<center>
							Compras o Vendes?
							<small v-if="pasos > 1"><br>({{userdata.level ? 'Vender' : 'Comprar'}})</small></center>
					</v-stepper-step>
					<v-divider></v-divider>
					<v-stepper-step
						:complete="pasos > 2"
						step="2"
						:color="(pasos > 2) ? 'success' : 'primary'"
					>
						<center>Registro<small v-if="pasos > 2"><br>(Completo)</small></center>
					</v-stepper-step>
					<v-divider></v-divider>
					<v-stepper-step
						:complete="pasos > 3"
						step="3"
						:color="(pasos > 3) ? 'success' : 'primary'"
					>
						<center>Empresa<small v-if="pasos > 3"><br>(Completo)</small></center>
					</v-stepper-step>
					<v-divider></v-divider>
					<v-stepper-step
						:complete="pasos > 4"
						step="4"
						:color="(pasos > 4) ? 'success' : 'primary'"
					>
						<center>
							Perfil
							<small v-if="pasos > 4"><br>(Completo)</small></center>
					</v-stepper-step>
					<v-divider></v-divider>
					<v-stepper-step
						:complete="pasos > 5"
						step="5"
						:color="(pasos > 5) ? 'success' : 'primary'"
					>
						<center>Condiciones
							<small v-if="pasos > 5"><br>(Completo)</small></center>
					</v-stepper-step>
				</v-stepper-header>

				<!-- Secciones de la pagina -->
				<v-stepper-items v-if="!userdata.level">
					<v-stepper-content step="1">
						<v-container>
							<v-layout row>
								<v-flex xs12>
									<center>
										<h1>¿Que deseas hacer?</h1><br><br>
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
														<v-icon size="110">mdi-allergy</v-icon>
													</v-flex>
													<v-flex xs12>
														<h1>Comprar</h1>
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
														<h1>Vender</h1>
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
						<form>
							<v-container
								grid-list-lg
								align-content-center
								text-xs-center
							>
								<v-layout
									row
									wrap
									align-center
									align-content-center
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
											hint="(####) - ### ####"
											mask="(####) - ### ####"
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
									<v-flex xs6>
										<center>
											<v-btn @click="prevStep">
												<v-icon
													left
													small
												>mdi-arrow-left-bold</v-icon>Anterior
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
												Siguiente
												<v-icon
													right
													small
												>mdi-arrow-right-bold</v-icon>
											</v-btn>
										</center>
									</v-flex>
								</v-layout>
							</v-container>
						</form>
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
										<h1>Terminos y Condiciones del sitio</h1>
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
											>mdi-arrow-left-bold</v-icon>Anterior
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
										<h1>¿Que deseas hacer?</h1><br><br>
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
														<v-icon size="110">mdi-allergy</v-icon>
													</v-flex>
													<v-flex xs12>
														<h1>Comprar</h1>
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
														<h1>Vender</h1>
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
						<form>
							<v-container
								grid-list-lg
								align-content-center
								text-xs-center
							>
								<v-layout
									row
									wrap
									align-center
									align-content-center
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
											hint="(####) - ### ####"
											mask="(####) - ### ####"
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
									<v-flex xs6>
										<center>
											<v-btn @click="prevStep">
												<v-icon
													left
													small
												>mdi-arrow-left-bold</v-icon>Anterior
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
												Siguiente
												<v-icon
													right
													small
												>mdi-arrow-right-bold</v-icon>
											</v-btn>
										</center>
									</v-flex>
								</v-layout>
							</v-container>
						</form>
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
										<h2>Datos de la Empresa</h2>
									</center>
								</v-flex>
								<v-flex xs12>
									Seller
								</v-flex>
								<v-flex xs6>
									<center>
										<v-btn @click="prevStep">
											<v-icon
												left
												small
											>mdi-arrow-left-bold</v-icon>Anterior
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
											Siguiente
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
						:style="{'background-color': dark ? '#303030' : '#FFFFFF'}"
						step="4"
						:dark="dark"
					>
						<v-container>
							<v-layout>
								<v-flex xs12>
									<center>
										<h2>Perfil de Vendedor</h2>
									</center>
								</v-flex>
							</v-layout><br>
							<v-layout>
								<v-flex
									v-if="tabs === 0"
									xs12
								>
									<center>
										<h3>Selecciona las marcas en las que vendes repuestos</h3>
										[1/2]
										<h5>{{infoallparts}}</h5>
									</center>
								</v-flex>
								<v-flex
									v-else
									xs12
								>
									<center>
										<h3>{{infospecialparts}}</h3>
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
							:style="{'background-color': dark ? '#303030' : '#FFFFFF'}"
						>
							<v-spacer v-show="showtabs"></v-spacer>
							<v-tab
								v-show="showtabs"
								:dark="dark"
								ripple
								:style="{'background-color': dark ? '#303030' : '#FFFFFF'}"
							>Marcas</v-tab>
							<v-spacer v-show="showtabs"></v-spacer>
							<v-tab
								v-show="showtabs"
								:style="{'background-color': dark ? '#303030' : '#FFFFFF'}"
								:dark="dark"
								ripple
							>Partes</v-tab>
							<v-spacer v-show="showtabs"></v-spacer>
							<v-tab-item
								:dark="dark"
								:style="{'background-color': dark ? '#303030' : '#FFFFFF'}"
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
								:style="{'background-color': dark ? '#303030' : '#FFFFFF'}"
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
										>mdi-arrow-left</v-icon>Anterior
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
										>mdi-arrow-left-bold</v-icon>Anterior
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
										Siguiente
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
										Siguiente
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
									<h1>Terminos y Condiciones del sitio</h1>
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
											>fa-arrow-left</v-icon>Anterior
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
		<code>{{userdata}}</code>
	</v-container>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    infoallparts: 'Sera notificado por todos los tipos de partes que elijas.',
    infospecialparts: 'Debes seleccionar las partes que vendes.',
    showtabs: true,
    tabs: 0,
    pasos: 1,
    docused: false,
    emailused: false,
    userdata: {
      redirect: false,
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
      profile: [
      ]
    },
    selbrands: [

    ],
    selparts: [

    ],
    birthdate: '0000-00-00',
    birthdateFormatted: '0000-00-00',
    showlevel: false,
    menu1: false,
    terms: false,
    termstext: '<p align="justify"> Officia ut laboris exercitation aute eiusmod labore. Voluptate nostrud non aliquip voluptate duis Lorem minim deserunt aliqua. Ullamco culpa qui consequat adipisicing aliqua occaecat. </p> <p align="justify">Ut Lorem sunt ea elit ex dolore veniam esse. Minim ea tempor ea elit labore laborum labore do deserunt do nulla. Ipsum minim sint consequat elit amet occaecat proident sint labore. Quis laborum tempor non magna sunt velit veniam do adipisicing Lorem cupidatat duis laborum nisi. Anim ea ut eu commodo tempor incididunt proident pariatur. Dolore sit tempor ut eu elit. Sunt reprehenderit est esse Lorem tempor magna officia Lorem officia mollit consequat est. </p> <p align="justify"> Sunt dolore excepteur cillum amet proident nulla sunt excepteur do eu anim velit aliqua irure. Consequat sunt commodo anim tempor labore ad voluptate. Aliqua eiusmod consectetur anim esse culpa.</p> <p align="justify"> Ea irure aliqua officia est in. Eiusmod amet duis irure non mollit quis esse nulla cillum. Labore elit ex exercitation officia do non occaecat laborum ea ea do officia nulla anim. Duis ullamco dolor cillum duis sit occaecat ut do duis eu dolor. Eiusmod magna id ncididunt sunt magna sunt qui.</p> <p align="justify">Officia anim dolor quis nulla nisi ad cillum dolore cillum magna aliquip nostrud. Ullamco ea et ad ex laboris excepteur nulla quis eiusmod consequat ea est ut in. Ea labore sit irure occaecat ullamco. Elit Lorem labore aliquip eiusmod dolore ad consequat anim pariatur. Amet culpa aute et non sit est laboris nostrud dolore laboris eu aliqua non mollit.</p>'
  }),
  computed: {
    dark () {
      return this.$store.getters.ui_g_dark;
    },
    proxpaso () {
      let condition;
      if (this.pasos == 2) { condition = !this.emailformatted || this.userdata.name.length < 3 || this.userdata.last.length < 3 || this.userdata.doctype.length < 0 || this.userdata.nac.length < 0 || this.userdata.doc.length < 7 || this.pml || this.cpp || this.userdata.phone.length <= 10 || this.emailused != '' || this.docused != ''; } else if (this.pasos == 3) { condition = this.userdata.seller.name.length < 3 || this.userdata.seller.nac.length == 0 || this.userdata.seller.rif.length < 9 || this.userdata.seller.phone.length <= 10 || this.userdata.seller.city.length == 0 || this.userdata.seller.address == 0; }
      return condition;
    },
    emailformatted () {
      let regexemail = /^[a-zA-Z0-9!#$&*?^{}˜.Çç-]+(\.[a-zA-Z0-9!#$&*?^{}˜.Çç-]+)*@([a-zA-Z0-9]+([a-zA-Z0-9-]*)\.)+[a-zA-Z]+$/;
      let validemail = this.userdata.email.match(regexemail) ? true : false;
      return validemail;
    },
    emailmessage () {
      return this.emailformatted ? false : 'Escribe un formato de email válido';
    },
    profiled () {
      return this.userdata.profile.length;
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
    cpp () {
      return this.userdata.pass != this.userdata.confirmpass ? true : false;
    },
    comparePasswords () {
      return this.cpp ? 'Las contraseñas deben ser iguales' : false;
    },
    levels () {
      return this.$store.getters.admin_g_levels;
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
    niveles () {
      return [
        { text: 'usuario', value: '0' },
        { text: 'vendedor', value: '1' }
      ];
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
    birthdate () {
      this.birthdateFormatted = this.formatDate(this.birthdate);
      this.userdata.birth = this.birthdate;
    }
  },
  created () {
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
    start () {
      this.pasos = 1;
    },
    nextStep () {
      this.pasos++;
    },
    prevStep () {
      this.pasos--;
    },
    do_action (who) {
      this.userdata.level = who;
      this.nextStep();
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
    prevTab () {
      const tabs = parseInt(this.tabs);
      this.tabs = tabs > 0 ? tabs - 1 : 0;
    },
    nextTab () {
      const tabs = parseInt(this.tabs);
      this.tabs = tabs < 3 ? tabs + 1 : 0;
    },

    cmenu1 () {
      this.menu1 = false;
    },
    onSignUp () {
      this.$store.dispatch('user_a_signup', this.userdata);
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
