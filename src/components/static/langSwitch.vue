<template>
	<div>
		<v-menu
			left
			offset-x
			:close-on-click="closeOnClick"
		>
			<template v-slot:activator="{on}">
				<v-btn
					:dark="darkness"
					text
					color="white"
					style="text-transform:capitalize"
					v-on="on"
				>
					<v-icon size="20">mdi-earth</v-icon>
					<v-img
						class="mr-1 ml-2"
						width="16"
						height="11"
						:src="'./img/flags/' + $i18n.locale + '.png'"
					></v-img> {{$i18n.locale}}
				</v-btn>
			</template>

			<v-list :dark="darkness">
				<v-list-item
					v-for="(lang,i) in langs"
					:key="`Langs${i}`"
					:value="lang"
					@click="changelang(lang)"
				>
					<v-list-item-avatar
						class="ma-0 pa-0"
						tile
						dense
					>
						<div>
							<v-img
								class="img-responsive"
								:src="'./img/flags/' + lang + '.png'"
								:alt="lang"
							></v-img>
						</div>
					</v-list-item-avatar>
					<v-list-item-title>
						{{lang}}
					</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>

<script>
export default {
  name: 'locale-changer',
  data: () => ({
    closeOnClick: true,
  }),
  computed: {
    darkness () {
      return this.$store.getters.ui_g_dark;
    },
    langs () {
      return [
        'es',
        'en'
      ];
    }
  },
  watch: {

  },
  methods: {
    changelang (lang) {
      this.$i18n.locale = lang;
      this.$router.push(
        { params: { lang: lang } }
      );
    }
  }
};
</script>

<style>
</style>
