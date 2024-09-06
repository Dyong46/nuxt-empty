export default {
	app: {
		error: "Error",
		rules: {
			required: "This field is required.",
			min: "You must enter at least {min} characters.",
			minValue: "You must enter a number greater or equal to {min}.",
			max: "You must enter at most {max} characters.",
			maxValue: "You must enter a number smaller or equal to {max}.",
			intNumber: "You must enter an integer",
			email: "Invalid email address.",
			phone: "Invalid phone number.",
			emailOrPhone: "Invalid email address or phone number",
			password: "Invalid password, it must contain at least 8 characters and at least one uppercase, lowercase and numeric character.",
			url: "Invalid Url."
		},
		table: {
			perPage: "Items per page:",
			loading: "Loading data...",
			noData: "No data available.",
			noResult: "No result found."
		},
		headers: {
			id: "ID",
			scope: "Scope"
		},
		crud: {
			RowsPerPage: "Rows per page:",
			pageof: "{0} - {1} of {2}"
		}
	},
	relyAlerts: {
		clearAll: "Clear all"
	},
	relyEmoji: {
		find: "Find an emoji",
		"no-filter": "Please enter a search term",
		"no-result": "No emoji found"
	},
	relyAudio: {
		error: {
			audio: "Could not play sound"
		}
	},
	relyFilter: {
		remove: "Erase",
		provider: "Vendor",
		type: "Type",
		material: "Material",
		color: "Color",
		measurements: "Measurements",
		conditions: "Conditions",
		allergies: "Allergies",
		prescription: "Prescription",
		ankle: "Ankle",
		calf: "Calf",
		hip: "Hip size",
		thigh: "Thigh",
		lowerLeg: "Knee-Ankle",
		upperLeg: "Knee-Groin",
		legs: "Legs",
		compression: "Compression"
	},
	relyTitle: {
		back: "Back"
	},
	relyChat: {
		"loading-messages": "Loading messages",
		"no-message": "No message here",
		"loading-notes": "Loading notes",
		"no-note": "No notes yet",
		error: {
			messages: "Could not retrieve chat messages",
			notes: "Could not retrieve customer notes"
		}
	},
	relyChatLine: {
		download: "Download"
	},
	relyCrudActions: {
		edit: "Edit",
		delete: "Delete"
	},
	relyCrud: {
		error: {
			400: "Invalid request: {message}",
			401: "Unauthorized access: {message}",
			403: "Unauthorized access: {message}",
			404: "Not found: {message}",
			409: "Duplicate entry found on field {message}.",
			500: "An error occured on the server: {message}"
		}
	},
	relyCrudList: {
		error: {
			remove: "There was a problem deleting the data."
		},
		prompt: {
			yes: "Yes",
			no: "No",
			remove: {
				title: "Confirm delete",
				message: "Are you sure you want to delete this item?"
			}
		},
		"edit-payment": "Edit payment method"
	},
	relyCrudToolbar: {
		search: "Search"
	},
	relyCustomerIcons: {
		customer: "Customer profile"
	},
	relyCustomerName: {
		anonymous: "Anonymous"
	},
	relyFormChatOptions: {
		chat: {
			gravatarEngine: "Avatars"
		},
		engine: {
			mp: "Mystery person",
			identicon: "Identicon",
			monsterid: "Monster ID",
			wavatar: "Wavatar",
			retro: "Retro",
			robohash: "Robohash"
		}
	},
	relyFormClient: {
		client: {
			name: "Company name",
			email: "Contact email",
			address: "Address",
			phone: "Phone number"
		}
	},
	relyForm: {
		submit: "Save"
	},
	relyFormUser: {
		user: {
			firstname: "First name",
			lastname: "Last name",
			email: "Email",
			language: "Language"
		}
	},
	relyInputPassword: {
		label: "Password"
	},
	relyInputTranslations: {
		add: "Add translation",
		translations: "Translations",
		done: "Done"
	},
	relyLayoutDnd: {
		drop: "Drop your file(s) here.",
		upload: "Upload",
		"dnd-howto": "Select a file"
	},
	relyNavBar: {
		profile: "My profile",
		logout: "Log out"
	}
};
