<template>
	<v-layout class="px-5" justify-center align-center>
		<v-col cols="2" flex-grow-0 flex-shrink-0>
			<v-sheet class="pa-2" rounded color="blue-lighten-5">
				<v-sheet rounded height="300">
					123
				</v-sheet>
			</v-sheet>
		</v-col>
		<v-col cols="10">
			<v-sheet class="pa-2" rounded color="blue-lighten-5">
				<v-sheet rounded height="2000">
					123
				</v-sheet>
			</v-sheet>
		</v-col>
	</v-layout>
</template>

<script>
export default {
	name: "IndexPage",
};
</script>