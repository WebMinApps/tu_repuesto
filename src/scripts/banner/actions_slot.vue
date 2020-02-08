<template>
	<div>
		<v-checkbox
			v-model="v0"
			label="Visible"
		></v-checkbox>
		<v-banner
			v-model="v0"
			single-line
			transition="slide-y-transition"
		>
			No Internet connection
			<template v-slot:actions="{dismiss}">
				<v-btn
					text
					color="primary"
					@click="dismiss"
				>Dismiss</v-btn>
				<v-btn
					text
					color="primary"
				>Retry</v-btn>
			</template>
		</v-banner>
	</div>
</template>

<script>
/*
Actions slot
the actions slot has dismiss function in its scope, you can use it to easily dismiss banner
*/

export default {
    data: () => ({
        v0: true,
    }),
};
</script>
