<template>
	<v-menu
		ref="menu"
		v-model="menu"
		:close-on-content-click="false"
		:nudge-right="40"
		transition="scale-transition"
		offset-y
		offset-x
		max-width="290px"
		min-width="290px"
	>
		<template v-slot:activator="{on}">
			<v-text-field
				:id="name"
				v-model="birthdate"
				:readonly="readonly"
				:name="name"
				:label="label"
				type="text"
				:prepend-icon="prepend"
				:required="required"
				:loading="loading"
				:disabled="disabled"
				v-on="on"
			></v-text-field>
		</template>
		<v-date-picker
			v-model="birthdateRAW"
			:show-current="false"
			locale="es-es"
			no-title
			@input="closemenu"
		></v-date-picker>
	</v-menu>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
      default: '0000-00-00'
    },
    'prepend': {
      type: String,
      default: 'mdi-calendar-check'
    },
    required: {
      type: Boolean
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    max: {
      type: String,
      default: ''
    },
    min: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    readonly: true,
    menu: false,
    birthdate: '',
    birthdateRAW: '0000-00-00',
  }),
  computed: {
    mindate () {
      let ys = this.min ? this.min : 18;
      return this.datediff(ys);
    },
    maxdate () {
      let ys = this.max ? this.max : 80;
      return this.datediff(ys);
    }
  },
  watch: {
    birthdateRAW (value) {
      this.birthdate = this.formatDate(value);
      this.$emit('input', this.birthdateRAW);
    }
  },
  created () {
    let thedate = (this.value != '0000-00-00' || this.value == '') ? this.value : this.maxdate;
    this.birthdateRAW = thedate;
  },
  methods: {
    closemenu () {
      this.menu1 = false;
    },
    datediff (ddiff = 80) {
      let dnow = new Date();
      let ystart = dnow.getFullYear() - ddiff;
      let mstart = dnow.getMonth();
      let dystart = dnow.getUTCDate();
      let dstart = new Date(ystart + '-' + (mstart + 1) + '-' + dystart);
      return this.$moment(dstart).format('YYYY-MM-DD');
    },
    // Cambia formato de fecha DD/MM/AAAA -> AAAA-MM-DD
    parseDate (date) {
      if (!date) return null;
      const [month, day, year] = date.split('/');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    },
    // Cambia formato de fecha a AAAA-MM-DD -> DD/MM/AAAA
    formatDate (date) {
      if (!date) return null;
      const [year, month, day] = date.split('-');
      return `${day}/${month}/${year}`;
    },
  }
};
</script>
<style>
</style>
