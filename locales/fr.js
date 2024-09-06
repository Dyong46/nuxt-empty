export default {
	app: {
		error: "Erreur",
		rules: {
			required: "Ce champs est requis.",
			min: "Vous devez entrer au moins {min} caractères.",
			minValue: "Vous devez entrer un chiffre égal ou supérieur à {min}.",
			max: "Vous devez entrer au maximum {max} caractères.",
			maxValue: "Vous devez entrer un chiffre égal ou inférieur à {max}.",
			intNumber: "Vous devez saisir un entier",
			email: "Adresse courriel invalide.",
			phone: "Numéro de téléphone invalide.",
			emailOrPhone: "Adresse courriel ou numéro de téléphone invalide.",
			password: "Mot de passe invalide, il doit contenir au minimum 8 caractères et au moins une lettre minuscule, majuscule et un chiffre.",
			url: "URL invalide."
		},
		table: {
			perPage: "Items par page:",
			loading: "Chargement des données...",
			noData: "Aucune donnée disponible.",
			noResult: "Aucun résultat trouvé."
		},
		headers: {
			id: "ID",
			scope: "Portée"
		},
		crud: {
			RowsPerPage: "Lignes par page:",
			pageof: "{0} - {1} de {2}"
		}
	},
	relyAlerts: {
		clearAll: "Tout effacer"
	},
	relyAudio: {
		error: {
			audio: "Impossible de lire le son"
		}
	},
	relyEmoji: {
		find: "Trouver un emoji",
		"no-filter": "Veuillez entrer une recherche",
		"no-result": "Aucun emoji trouvé"
	},
	relyFilter: {
		remove: "Tout effacer",
		provider: "Fournisseur",
		typs: "Type",
		material: "Matériaux",
		color: "Couleur",
		measurements: "Measurements",
		allergies: "Allergies",
		prescription: "Prescription",
		ankle: "Mollets",
		calf: "Cuisses",
		hip: "Taille à la hanche",
		thigh: "Cuisse",
		lowerLeg: "Genou-cheville",
		upperLeg: "Genou-Aine",
		type: "Style",
		legs: "Les jambes",
		compression: "Compression",
		conditions: "Conditions"
	},
	relyTitle: {
		back: "Retour"
	},
	relyChat: {
		"loading-messages": "Chargement des messages",
		"no-message": "Aucun message ici",
		"loading-notes": "Chargement des notes",
		"no-note": "Aucune note pour le moment",
		error: {
			messages: "Impossible d'extraire les messages de la discussion",
			notes: "Impossible d'extraire les notes sur le client"
		}
	},
	relyChatLine: {
		download: "Télécharger"
	},
	relyCrudActions: {
		edit: "Modifier",
		delete: "Supprimer"
	},
	relyCrud: {
		error: {
			400: "Requête invalide: {message}",
			401: "Accès refusé: {message}",
			403: "Accès refusé: {message}",
			404: "Introuvable: {message}",
			409: "Donnée unique existante pour le champs {message}.",
			500: "Une erreur est survenue sur le serveur: {message}"
		}
	},
	relyCrudList: {
		error: {
			remove: "Un problème est survenu lors de l'effacement des données."
		},
		prompt: {
			yes: "Oui",
			no: "Non",
			remove: {
				title: "Confirmez l'effacement",
				message: "Êtes-vous certain de vouloir effacer cet item?"
			}
		},
		"edit-payment": "Modifier le mode de paiement"
	},
	relyCrudToolbar: {
		search: "Rechercher"
	},
	relyCustomerIcons: {
		customer: "Profil client"
	},
	relyCustomerName: {
		anonymous: "Anonyme"
	},
	relyFormChatOptions: {
		chat: {
			gravatarEngine: "Avatars"
		},
		engine: {
			mp: "Personne mystère",
			identicon: "Identicon",
			monsterid: "ID Monstre",
			wavatar: "Wavatar",
			retro: "Rétro",
			robohash: "Robohash"
		}
	},
	relyFormClient: {
		client: {
			name: "Nom de compagnie",
			email: "Courriel de contact",
			address: "Adresse",
			phone: "Numéro de téléphone"
		}
	},
	relyForm: {
		submit: "Enregistrer"
	},
	relyFormUser: {
		user: {
			firstname: "Prénom",
			lastname: "Nom de famille",
			email: "Courriel",
			language: "Langue"
		}
	},
	relyInputPassword: {
		label: "Mot de passe"
	},
	relyInputTranslations: {
		add: "Ajouter une traduction",
		translations: "Traductions",
		done: "Terminé"
	},
	relyLayoutDnd: {
		drop: "Déposez vos fichier(s) ici.",
		upload: "Télécharger",
		"dnd-howto": "Choisir un fichier"
	},
	relyNavBar: {
		profile: "Mon profil",
		logout: "Déconnexion"
	}
};
