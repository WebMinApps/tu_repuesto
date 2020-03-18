<template>
	<v-container class="pt-0 mt-0">
		<v-layout
			class="pt-0 mt-0 "
			row
			wrap
		>
			<v-flex
				xs6
				sm4
				md3
				lg2
				xl2
			>
				<v-checkbox
					v-model="profile"
					:dark="dark"
					:label="'[Todos]'"
					:value="'000000000000000000000000000000'"
				></v-checkbox>
			</v-flex>
			<v-flex
				v-for="(brand) in brands"
				:key="brand.ID"
				xs6
				sm4
				md3
				lg2
				xl2
			>
				<v-checkbox
					:key="brand.ID"
					:ref="brand.ID"
					v-model="profile"
					:dark="dark"
					:disabled="profile.indexOf('000000000000000000000000000000') != -1"
					:label="brand.text"
					:value="brand.value"
				></v-checkbox>
			</v-flex>
		</v-layout>
	</v-container>

</template>

<script>
import axios from 'axios';
export default {
  props: {
    value: {
      type: Array,
      required: false,
      default: () => ([])
    }
  },
  data: () => ({
    brands: [],
    profile: [],
  }),
  computed: {
    dark () {
      return this.$store.getters.ui_g_dark;
    }
  },
  watch: {
    profile () {
      let abitem = '000000000000000000000000000000';
      this.$emit('input', this.profile);
      if (this.profile.indexOf(abitem) != -1) {
        this.brands.forEach((b) => {
          let index = this.profile.indexOf(b.value);
          if (index != -1) {
            this.profile.splice(index, 1);
          }
        });
      }
    },
  },
  created () {
    this.profile = this.value;
    this.profile_brands();

  },
  methods: {
    profile_brands () {
      axios
        .get('ask/notilist/brands')
        .then(response => {
          const list = response.data.data;
          this.brands = list;
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
        .then(() => { });
    }
  }

};
</script>

<style>
</style>
