const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_REGEX = /^[0-9-_() +.# ]*$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%?&*]).{8,}$/;
const URL_REGEX = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$/;
const SPECIAL_CHARACTERS = /^[\w\s]+$/;
const INTEGER_REGEX = /^[0-9]+$/;

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.provide("rules", {
		required: value => !!value || "This field is required.",
		intNumber: (value) => {
			return !value || INTEGER_REGEX.test(value) || "You must enter an integer.";
		},
		minLength: (value, min) => !value || value.length >= min || `You must enter at least ${min} characters.`,
		minValue: (value, min) => !value || value >= min ||`You must enter a number greater or equal to ${min}.`,
		maxLength: (value, max) => !value || value.length <= max || `You must enter at most ${max} characters.`,
		maxValue: (value, max) => !value || value <= max || `You must enter a number smaller or equal to ${max}.`,
		emailOrPhone: (value) => {
			return !value || EMAIL_REGEX.test(value) || PHONE_REGEX.test(value) || "Invalid email address or phone number.";
		},
		email: (value) => {
			return !value || EMAIL_REGEX.test(value) || "Invalid email address.";
		},
		special: (value) => {
			return !value || SPECIAL_CHARACTERS.test(value) || "Special characters are not allowed.";
		},
		phone: (value) => {
			return !value || PHONE_REGEX.test(value) || "Invalid phone number.";
		},
		password: (value) => {
			return !value || PASSWORD_REGEX.test(value) || "Invalid password, it must contain at least 8 characters and at least one uppercase, lowercase and numeric character.";
		},
		url: (value) => {
			return !value || URL_REGEX.test(value) || "Invalid Url.";
		},
		name: (value) => {
			return !!(value.trim());
		}
	});
});
