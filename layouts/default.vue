<template>
	<div>
		<v-app>
			<v-main>
				<div>
					<slot />
				</div>
			</v-main>
		</v-app>
	</div>
</template>

<script>
export default {
	name: "DefaultLayout",
};
</script>
