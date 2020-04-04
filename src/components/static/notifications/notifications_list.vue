<template>
	<v-list two-line>
		<template v-for="(item, index) in notification">
			<v-subheader
				v-if="item.header"
				:key="item.header"
				inset
			>
				{{ item.header }}
			</v-subheader>
			<v-divider
				v-else-if="item.divider"
				:key="index"
				inset
			></v-divider>
			<v-list-item
				v-else
				:key="item.title"
				ripple
			>
				<v-list-item-avatar>
					<img :src="item.avatar">
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title v-html="item.title"></v-list-item-title>
					<v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</template>
	</v-list>
</template>

<script>
export default {

};
</script>

<style>
</style>
