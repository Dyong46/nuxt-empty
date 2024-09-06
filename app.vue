<template>
	<NuxtLayout>
		<NuxtPage />
		<v-snackbar v-if="messages.length" v-model="snackbar" :timeout="3000">
			<v-alert
				:value="messages.at(-1).value"
				:type="messages.at(-1).type"
				:icon="`mdi-${messages.at(-1).icon || 'alert'}`"
				elevation="5"
				class="ma-0"
			>
				{{ messages.at(-1).message }}
			</v-alert>
			<template #actions>
				<v-btn
					icon="mdi-close"
					@click="snackbar = false"
				/>
			</template>
		</v-snackbar>
	</NuxtLayout>
</template>
<script>
import { mapFields } from "vuex-map-fields";
export default {
	data() {
		return {
			snackbar: false,
			snackbarTime: 0
		};
	},
	computed: {
		...mapFields("alerts", ["messages"])
	},
	watch: {
		messages:{
			deep: true,
			handler () {
				if (
					this.messages.length > 0 &&
					this.messages.at(-1).created.getTime() > this.snackbarTime
				) {
					this.snackbar = true;
					this.snackbarTime = this.messages.at(-1).created.getTime();
				}
			}
		}
	}
};
</script>

<style scoped>
body {
	overflow: hidden;
	overscroll-behavior: none;
}
</style>
