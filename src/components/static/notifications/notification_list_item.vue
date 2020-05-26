<template>
	<span>
		<v-list>
			<!-- Entrada de item donde ubicar el FOR -->
			<v-list-item>
				<!-- Imagen -->
				<app-notification-avatar></app-notification-avatar>

				<!-- Texto de Contenido-->
				<app-notification-content></app-notification-content>

				<!-- Acciones Botones laterales Se pueden repetir con FOR -->
				<app-notification-action-bottom></app-notification-action-bottom>
			</v-list-item>
		</v-list>
	</span>
</template>

<script>
import avatar from '@/components/static/notifications/notification_list_avatar.vue';
import content from '@/components/static/notifications/notification_list_content.vue';
import bottom from '@/components/static/notifications/notification_list_action_botton.vue';
export default {
  components: {
    'app-notification-avatar': avatar,
    'app-notification-content': content,
    'app-notification-action-bottom': bottom
  }
};
</script>
