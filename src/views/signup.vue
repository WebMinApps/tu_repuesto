<template>
	<span>
		<br>
		<v-container>
			<v-layout>
				<v-flex>

					<app-panel noratio>
						<template slot="title">
							<v-icon left>mdi-account-check</v-icon>Registro
						</template>
						<template slot="button"></template>
						<app-user-quest></app-user-quest>
					</app-panel>
				</v-flex>
			</v-layout>
		</v-container>
		<br />
	</span>
</template>

<script>
import registeruser from '@/components/shared/input/register_user.vue';

export default {
  components: {
    'app-user-quest': registeruser
  }
};
</script>

<style>
</style>
