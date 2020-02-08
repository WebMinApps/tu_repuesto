<template>
	<div class="text-center">
		<v-badge
			:value="hover"
			color="deep-purple accent-4"
			content="9999+"
			left
			transition="slide-x-transition"
		>
			<v-hover v-model="hover">
				<v-icon
					color="grey lighten-1"
					large
				>
					mdi-account-circle
				</v-icon>
			</v-hover>
		</v-badge>
	</div>
</template>

<script>
/*
Show-on-hover
You can do many things with visibility control, for example, show badge on hover.
*/

export default {
    data: () => ({
        hover: false,
    }),
};
</script>
