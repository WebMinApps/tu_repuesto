<template>
	<v-container>
		<v-layout
			row
			nowrap
		>
			<v-flex
				xs12
				sm6
				md4
			>
				<v-autocomplete
					:id="'brand_' + unique"
					v-model="form.brand"
					:disabled="loading"
					:clearable="clearable"
					item-value="ID"
					item-text="name"
					loader-height="5"
					:prepend-icon="showicons ? 'mdi-certificate' : ''"
					:items="brands"
					:dark="dark"
					:solo="solo"
					:outlined="outlined"
					:loading="loadingf.brands"
					:label="$t('forms.terms.brands')"
					required
					:rules="[v => !!v || $t('forms.tems.brands')]"
					@click="loadbrands"
					@input="updateValue(form)"
				></v-autocomplete>
			</v-flex>
			<v-flex
				xs12
				sm6
				md4
			>
				<v-autocomplete
					:id="'model_' + unique"
					v-model="form.model"
					:disabled="loading"
					:prepend-icon="showicons ? 'mdi-car-back' : ''"
					item-value="ID"
					item-text="name"
					:items="models"
					:clearable="clearable"
					:dark="dark"
					:solo="solo"
					:outlined="outlined"
					:loading="loadingf.models"
					:label="$t('forms.terms.models')"
					:rules="[v => !!v || $t('forms.tems.models')]"
					required
					@input="updateValue(form)"
				></v-autocomplete>
			</v-flex>
			<v-flex
				xs12
				sm6
				md4
			>
				<v-autocomplete
					:id="'year_' + unique"
					v-model="form.year"
					:clearable="clearable"
					:disabled="loading"
					:prepend-icon="showicons ? 'mdi-calendar' : ''"
					:items="years"
					:dark="dark"
					:solo="solo"
					:outlined="outlined"
					:label="$t('forms.terms.year')"
					:rules="[v => !!v ||  $t('forms.tems.year')]"
					@input="updateValue(form)"
				></v-autocomplete>
			</v-flex>
			<template v-if="simple">
				<v-flex
					xs11
					sm5
					md7
				>
					<v-autocomplete
						:id="'allpart' + unique"
						v-model="form.part"
						:clearable="clearable"
						:disabled="loading"
						:prepend-icon="showicons ? 'mdi-wrench' : ''"
						:items="mparts"
						:dark="dark"
						:solo="solo"
						:outlined="outlined"
						:loading="loadingf.parts"
						:label="$t('forms.terms.parts')"
						:rules="[v => !!v || $t('forms.tems.parts')]"
						@input="updateValue(form)"
					></v-autocomplete>
				</v-flex>
			</template>
			<template v-else>
				<v-flex
					xs5
					sm2
					md3
				>
					<v-autocomplete
						:id="'subpart_' + unique"
						v-model="form.spart"
						:prepend-icon="showicons ? 'mdi-progress-wrench' : ''"
						:items="sparts"
						:disabled="loading"
						:dark="dark"
						:solo="solo"
						:outlined="outlined"
						:loading="loadingf.sparts"
						:label="$t('forms.terms.subparts')"
						hint="Selecciona la Sub-parte del vehiculo"
						:rules="[v => !!v || 'Coloca la Sub-Parte']"
						:clearable="clearable"
						@input="updateValue(form)"
					></v-autocomplete>
				</v-flex>
				<v-flex
					xs6
					sm3
					md4
				>
					<v-autocomplete
						:id="'part_' + unique"
						v-model="form.part"
						:prepend-icon="showicons ? 'mdi-wrench' : ''"
						:items="parts"
						:dark="dark"
						:disabled="loading"
						:solo="solo"
						:outlined="outlined"
						:clearable="clearable"
						:loading="loadingf.parts"
						:label="$t('forms.terms.parts')"
						hint="Selecciona la parte del vehiculo"
						:rules="[v => !!v || 'Coloca la Parte']"
						@input="updateValue(form)"
					></v-autocomplete>
				</v-flex>
			</template>
			<v-flex xs1>
				<app-tooltip
					v-model="loading"
					bottom
					:tooltip="simple ? 'Vista Compuesta' : 'Vista Simple'"
				>
					<v-btn
						:dark="dark"
						icon
						x-large
						:disabled="loading"
						@click="togglesimple"
					>
						<v-icon>{{simple ? 'mdi-cog-clockwise' : 'mdi-cogs'}}</v-icon>
					</v-btn>
				</app-tooltip>
			</v-flex>
			<v-flex
				xs12
				sm12
				md4
			>
				<app-fileinput
					:id="'images_' + unique"
					v-model="form.image"
					:readonly="loading"
					:clearable="clearable"
					accept="image/*"
					:placeholder="$t('forms.terms.photo') + ' (' + $t('forms.terms.optional') + ')' "
					:prepend-icon="showicons ? 'mdi-file-image' : ''"
					:outlined="outlined"
					:dark="dark"
					:solo="solo"
					:required="required"
					:disabled="loading"
					base64
					multiple
				></app-fileinput>
			</v-flex>
			<v-flex xs12>
				<v-textarea
					:id="'details_' + unique"
					v-model="form.details"
					:disabled="loading"
					:clearable="clearable"
					hint="Describe los terminos y consiciones de compra"
					:prepend-icon="showicons ? 'mdi-eye' : ''"
					:dark="dark"
					:solo="solo"
					:rules="[v => !!v || 'Rellena este campo']"
					:label="$t('forms.terms.details')"
					counter="300"
				></v-textarea>
			</v-flex>
		</v-layout>

	</v-container>
</template>

<script>
import axios from 'axios';
import common from '@/lib/common.js';
export default {
  props: {
    showicons: { type: Boolean },
    value: { required: true, type: Object, default: () => ({ ID: '0', brand: '', model: '', spart: '', part: '', details: '', image: [] }) },
    dark: { type: Boolean },
    solo: { type: Boolean },
    outlined: { type: Boolean },
    imglimit: { type: String, default: '2000000' },
    unique: { type: String, required: false, default: '0' },
    clearable: { type: Boolean },
    required: { type: Boolean }
  },
  data: () => ({
    form: { ID: '0', brand: '', model: '', part: '', spart: '', details: '', image: [] },
    loadingf: { brands: false, models: false, parts: false, sparts: false, mparts: false },
    brands: [],
    models: [],
    years: [],
    sparts: [],
    parts: [],
    mparts: [],
    simple: true,
  }),
  computed: {
    loading () {
      return this.$store.getters.ui_g_loading;
    }
  },
  watch: {
    'form.brand' (value) {
      this.loadmodels(value);
    },
    form (value) {
      this.$emit('input', value);
    },
    'image.length' (value) {
      if (!value) {
        this.form.image = [];
      }
    },
    'form.spart' (value) {
      this.updateparts(value);
    },
    'form.part' (value) {
      this.updatesparts(value);
      this.updateparts(this.form.spart);
    }
  },
  created () {
    this.form = this.value;
    this.loadbrands();
    this.loadmodels(this.form.brand);
    this.loadyears();
    this.loadparts();
    this.loadmparts();
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value);
    },
    loadbrands () {
      let url = common.url('/car/brands');
      if (this.brands.length <= 0) {
        this.loadingf.brands = true;
        axios.get(url).then(response => {
          this.brands = response.data.data;
        }).catch(error => {
          this.error = error;
        }).then(() => {
          this.loadingf.brands = false;
        });
      }
    },
    loadmodels (value) {
      let url = common.url('/car/models/brand/' + value);
      if (value) {
        this.loadingf.models = true;
        axios.get(url).then(response => {
          this.models = response.data.data;
        }).catch(error => {
          let message = common.error(error);
          this.$store.dispatch('ui_a_message', message);
        }).then(() => {
          this.loadingf.models = false;
        });
      }
    },
    loadyears () {
      const year_s = new Date().getFullYear() - 100;
      const year_e = new Date().getFullYear();
      let i = year_s;
      for (; i < year_e + 2; i++) {
        this.years.push(i.toString());
      }
      this.years.reverse();
    },
    loadparts () {
      axios
        .get('car/mparts')
        .then(response => {
          this.sparts = response.data.data;
        })
        .catch(error => {
          let message = common.error(error);
          this.$store.dispatch('ui_a_message', message);
        })
        .then(() => {
          this.loadingf.models = false;
        });
    },
    togglesimple () {
      this.simple = !this.simple;
    },
    loadmparts () {
      axios
        .get('car/parts')
        .then(response => {
          this.mparts = response.data.data;
        })
        .catch(error => {
          let message = common.error(error);
          this.$store.dispatch('ui_a_message', message);
        })
        .then(() => {
          this.loadingf.models = false;
        });
    },
    updateparts (value) {
      this.sparts.forEach(parts => {
        if (parts.value == value) {
          this.parts = parts.parts;
        }
      });
    },
    updatesparts (value) {
      this.sparts.forEach(spart => {
        spart.parts.forEach(p => {
          if (p.value == value) {
            this.form.spart = spart.value;
          }
        });
      });
    }
  }
};
</script>
