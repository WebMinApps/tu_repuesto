

<template>
	<div class="text-center">
		<v-menu>
			<template v-slot:activator="{on: menu}">
				<v-tooltip bottom>
					<template v-slot:activator="{on: tooltip}">
						<v-btn
							color="primary"
							dark
							v-on="{...tooltip, ...menu}"
						>Dropdown w/ Tooltip</v-btn>
					</template>
					<span>Im A ToolTip</span>
				</v-tooltip>
			</template>
			<v-list>
				<v-list-item
					v-for="(item, index) in items"
					:key="index"
				>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>

<script>
/* eslint-disable vue/valid-v-on */
/* eslint-disable vue/no-parsing-error */

export default {
  data: () => ({
    items: [
      { title: 'Click Me1' },
      { title: 'Click Me2' },
      { title: 'Click Me3' },
      { title: 'Click Me4' },
    ],
  }),
};
</script>
