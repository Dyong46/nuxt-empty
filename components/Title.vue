<template>
	<div v-if="text" :class="contentClass">
		<slot />
	</div>

	<v-toolbar v-else dense :flat="flat" :elevation="flat ? 0 : 1" :class="{ flat: flat }">
		<v-btn v-if="back" class="mr-3" @click="$router.back()">
			<v-icon left>
				mdi-chevron-left
			</v-icon>

			{{ $t("relyTitle.back") }}
		</v-btn>

		<v-toolbar-title>
			<v-subheader :class="[{ title: lg }]" class="px-0">
				<v-icon v-if="icon" left>
					mdi-{{ icon }}
				</v-icon>

				<slot />
			</v-subheader>
		</v-toolbar-title>

		<v-spacer />

		<slot name="actions" />
	</v-toolbar>
</template>

<script>
export default {
	name: "Title",
	props: {
		back: {
			type: Boolean,
			default: false
		},
		flat: {
			type: Boolean,
			default: false
		},
		icon: {
			type: String,
			default: undefined
		},
		lg: {
			type: Boolean,
			default: false
		},
		text: {
			type: Boolean,
			default: false
		},
		contentClass: {
			type: String,
			default: ""
		}
	}
};
</script>

<style lang="scss" scoped>
	.flat { background-color: rgba(0, 0, 0, 0) !important; }
</style>
