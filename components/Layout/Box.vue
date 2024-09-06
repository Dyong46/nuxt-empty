<template>
	<v-layout column fill-height class="py-10">
		<v-row justify="center" align="center">
			<v-col cols="12" lg="10">
				<v-card :rounded="rounded ? rounded : ''" :class="padding">
					<slot />
				</v-card>
			</v-col>
		</v-row>
	</v-layout>
</template>

<script>
export default {
	name: "LayoutBox",
	props: {
		bg: {
			type: String,
			default: undefined
		},
		rounded: {
			type: String,
			default: undefined
		},
		padding: {
			type: String,
			default: undefined
		}
	},
};
</script>
