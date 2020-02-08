<template>
	<div style="margin:10px">
		<v-carousel
			height="420px"
			progress-color="black"
			:show-arrows="true"
			show-arrows-on-hover
			hide-delimiters
			interval="500"
		>
			<v-carousel-item
				v-for="(item) in items"
				:key="item.ID"
				reverse-transition="fade-transition"
				transition="fade-transition"
				:continuous="true"
				:cycle="true"
			>
				<v-sheet height="100%">
					<v-row
						class="fill-height"
						align="center"
						justify="center"
					>
						<v-img
							class="fill-height"
							:src="item.img"
						>
						</v-img>
					</v-row>
				</v-sheet>
			</v-carousel-item>
		</v-carousel>
	</div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: false,
      default: () => ([
        {
          img: './img/icons/webapp-icon-512.png',
          imgsize: 'contain',
          color: null
        },
      ])
    }
  },
  data: () => ({})
};
</script>

<style>
</style>
