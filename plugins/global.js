export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.provide("global", {
		scope: "rentify",
		isRefreshBeforeTimeExpire: true
	});
});