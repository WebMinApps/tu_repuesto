<template>
	<v-card class="overflow-hidden">
		<v-app-bar
			absolute
			color="primary"
			dark
			inverted-scroll
			scroll-target="#scrolling-techniques-8"
		>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>

			<v-toolbar-title>Title</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>

			<v-btn icon>
				<v-icon>mdi-heart</v-icon>
			</v-btn>

			<v-btn icon>
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
		</v-app-bar>
		<v-sheet
			id="scrolling-techniques-8"
			class="overflow-y-auto"
			max-height="600"
		>
			<v-container style="height: 1500px;"></v-container>
		</v-sheet>
	</v-card>
</template>

<script>
/*
Inverted scrolling
When using the inverted-scroll property, the bar will hide until the user scrolls past the designated threshold. Once past the threshold, the v-app-bar will continue to display until the users scrolls up past the threshold. If no scroll-threshold value is supplied a default value of 0 will be used.
*/
</script>
