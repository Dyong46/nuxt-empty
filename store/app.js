import { getField, updateField } from "vuex-map-fields";

export const state = () => ({
	background: undefined,
	dark: false,
	mini: false,
	mute: false,
	drawer: false,
	gravatarEngine: "mp"
});

export const getters = {
	getField
};

export const mutations = {
	updateField,
	setGravatarEngine (state, payload) {
		if (state.gravatarEngine !== payload) {
			state.gravatarEngine = payload;
		}
	}
};

export const actions = {
	// async getGravatarEngine ({ commit }) {
	// 	try {
	// 		const response = await this.$rely.message("configuration", "values/read", {
	// 			where: {
	// 				key: "gravatar-engine"
	// 			}
	// 		});

	// 		commit("setGravatarEngine", response.values);
	// 	} catch (err) {
	// 		// Ignore error when not found
	// 	}
	// }
};

export const AppModule = {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
