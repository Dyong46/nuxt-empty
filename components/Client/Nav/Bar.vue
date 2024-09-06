<template>
	<div>
		<v-app-bar 
			fixed
			app 
			absolute
			elevation="0"
			height="100"
			class="px-5"
		>
			<v-app-bar-title class="d-flex font-weight-bold ms-0">
				<v-img
					width="130"
					src="/images/logo.png"
				></v-img>
			</v-app-bar-title>

			<v-spacer />
			
			<div class="d-flex justify-end align-center">
				<nuxt-link
					v-for="(val, key) in nav"
					:key="key"
					class="mx-5 font-weight-bold cursor-pointer"
				>
					{{ val.name }}
				</nuxt-link>
			</div>
		</v-app-bar>

		<v-app-bar
			fixed
			app 
			absolute
			elevation="0"
			class="px-5"
		>
		<v-btn
			v-for="(val, key) in button"
			:key="key"
			class="text-none font-weight-bold ms-3"
			variant="outlined"
			color="darkblue"
			:href="val.link"
		>
			{{ val.name }}
		</v-btn>
		</v-app-bar>
	</div>
</template>

<script>
export default {
	name: "ClientNavBar",
	data() {
		return {
			nav: [
				{ name: "About Us", link: "/about-us" },
				{ name: "Press Kit", link: "/press-kit" },
				{ name: "Lakes", link: "/lakes" },
				{ name: "Rules", link: "/rules" },
				{ name: "Blog", link: "/blog" },
				{ name: "Hosting", link: "/hosting" }
			],
			button: [
				{ name: "Subscriptions", link: "/subscriptions" },
				{ name: "Advantages", link: "/advantages" },
				{ name: "Functioning", link: "/functioning" },
				{ name: "Boating Licence", link: "/licence" },
				{ name: "Pricing", link: "/pricing" }
			]
		};
	},
};
</script>