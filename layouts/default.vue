<template>
	<v-app>
		<client-nav-bar />
		<v-main>
			<div>
				<slot />
			</div>
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: "DefaultLayout",
};
</script>
