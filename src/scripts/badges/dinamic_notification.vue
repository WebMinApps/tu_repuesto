<template>
	<v-container>
		<v-row justify="space-around">
			<div>
				<v-btn
					class="mx-1"
					color="primary"
					@click="messages++"
				>
					Send Message
				</v-btn>

				<v-btn
					class="mx-1"
					color="error"
					@click="resetMsg"
				>
					Clear Notifications
				</v-btn>
			</div>

			<v-badge
				:content="messages"
				:value="messages"
				color="green"
				overlap
			>
				<v-icon large>mdi-email</v-icon>
			</v-badge>
		</v-row>
	</v-container>
</template>

<script>
/*
Dynamic notifications
You can incorporate badges with dynamic content to make things such as a notification system.
*/

export default {
    data () {
        return {
            messages: 0,
            show: false,
        };
    },
    methods: {
        resetMsg () {
            this.messages = 0;
        }
    }
};
</script>
