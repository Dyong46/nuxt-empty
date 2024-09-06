import { getField, updateField } from "vuex-map-fields";

export const state = () => ({
    currentStep: 1,
});

export const getters = {
	getField
};

export const mutations = {
	updateField,
};
