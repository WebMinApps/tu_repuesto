<template>
	<v-layout fill-height>
		<v-flex>
			<v-card
				:height="height"
				:width="width"
				:dark="darkness"
				:loading="loading"
			>

				<v-card-title
					v-if="!notitle"
					class="primary"
					:class="darkness ? '' : ' lighten-3'"
					:style="stylecss"
				>
					<div style="height:36px"></div>
					<slot name="title" />
					<v-spacer />
					<slot name="buttons" />
				</v-card-title>
				<v-responsive :aspect-ratio="noratio ? '' : ratio">
					<slot />
				</v-responsive>
				<v-divider v-if="divide" />
				<v-card-actions>
					<slot name="footer" />
				</v-card-actions>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
export default {
  props: {
    notitle: {
      required: false,
      type: Boolean,
    },
    width: {
      required: false,
      type: String,
      default: ''
    },
    height: {
      required: false,
      type: String,
      default: ''
    },
    divide: {
      required: false,
      type: Boolean,
      defualt: false
    },
    noratio: {
      type: Boolean
    },
    loading: {
      required: false
    }
  },
  data: () => ({
    stylecss: {
      'margin-top': '0px',
      'margin-bottom': '10px',
      'margin-left': '0px',
      'margin-right': '0px',
      'padding-top': '5px',
      'padding-bottom': '5px',
      'padding-left': '14px',
      'padding-right': '14px',
    }
  }),
  computed: {
    darkness () {
      return this.$store.getters.ui_g_dark;
    },
    ratio () {
      let x = this.$vuetify.breakpoint.width;
      let y = this.$vuetify.breakpoint.height + this.margin[0];
      return x / y;
    },
    m () {
      return this.$vuetify.breakpoint.name;
    },
    margin () {
      let margin_w = [0, 0];
      if (this.m == 'lg') {
        margin_w = [-125, 0];
      } else if (this.m == 'md') {
        margin_w = [-95, 0];
      } else if (this.m == 'sm') {
        margin_w = [-120, 0];
      } else if (this.m == 'xs') {
        margin_w = [-150, 0];
      }
      return margin_w;
    }
  }
};
</script>

