const LANGUAGE = {
		en: "English",
		ja: "Japanese",
		fr: "French",
		it: "Italian",
		es: "Spanish",
		de: "German",
		zh: "Chinese",
		ko: "Korean",
		cn: "Cantonese",
		hi: "Hindi",
		sv: "Swedish",
		ru: "Russian",
		pt: "Portuguese",
		pl: "Polish",
		da: "Danish",
		th: "Thai",
		no: "Norwegian",
		nl: "Dutch",
		te: "Telugu",
		vi: "Vietnamese",
		ta: "Tamil",
		fi: "Finnish",
		cs: "Czech",
		tr: "Turkish",
		id: "Indonesian",
		fa: "Persian",
		ar: "Arabic",
		el: "Greek",
		tl: "Tagalog",
		he: "Hebrew",
		hu: "Hungarian",
		ur: "Urdu",
		ro: "Romanian",
		ms: "Malay",
		et: "Estonian",
		bn: "Bangla",
		sr: "Serbian",
		ml: "Malayalam",
		is: "Icelandic",
		uk: "Ukrainian",
		xx: "xx",
		ca: "Catalan",
		pa: "Punjabi",
		bo: "Tibetan",
		kn: "Kannada",
		ka: "Georgian",
		wo: "Wolof",
		af: "Afrikaans",
		eu: "Basque",
		sk: "Slovak",
		mr: "Marathi",
		gl: "Galician",
		am: "Amharic",
		bs: "Bosnian",
		ak: "Akan",
		la: "Latin",
		mn: "Mongolian",
		lv: "Latvian",
		nb: "Norwegian Bokmål",
		ht: "Haitian Creole",
		lt: "Lithuanian",
		hr: "Croatian",
		hy: "Armenian",
		be: "Belarusian",
		lg: "Ganda",
		st: "Southern Sotho",
		iu: "Inuktitut",
		so: "Somali",
		ab: "Abkhazian",
		az: "Azerbaijani",
		os: "Ossetic",
		sh: "Serbo-Croatian",
		ky: "Kyrgyz",
		sw: "Swahili",
		ps: "Pashto",
		lb: "Luxembourgish",
		mk: "Macedonian",
		ga: "Irish",
		km: "Khmer",
		yi: "Yiddish",
		mi: "Maori",
		aa: "Afar",
	},
	MODEL = {
		MOVIE_TMDB_ID: "tmId",
		MOVIE_IMDB_ID: "imId",
		MOVIE_TITLE: "title",
		MOVIE_ORIGINAL_TITLE: "originalTitle",
		MOVIE_PRODUCTION_COMPANY: "productionCompanies",
		MOVIE_RELEASE_DATE: "releaseDate",
		MOVIE_LANG: "languages",
		MOVIE_ORIGINAL_LANG: "originalLang",
		MOVIE_GENRES: "genres",
		MOVIE_YEAR: "year",
		MOVIE_TAGLINE: "tagline",
		MOVIE_DESC: "plot",
		MOVIE_RUNTIME_MIN: "runtimeMin",
		MOVIE_TRAILER: "trailer",
		MOVIE_LOAD_YT_TRAILER: "ladadYtTrailer",
		MOVIE_DIRECTORS: "directors",
		MOVIE_CREW: "crew",
		MOVIE_ACTORS: "actorList",
		MOVIE_SIMILARS: "similars",
		MOVIE_CONTENT_RATING: "contentRating",
		MOVIE_RATING: "ratings",
		MOVIE_POSTER: "poster",
		MOVIE_BACKDROP: "backdrop",
		MOVIE_IMAGES: "images",
		MOVIE_PROVIDERS: "providers",
		MOVIE_RECOMMAND: "recommand",
	},
	TMDB_PROVIERS = {
		8: {
			name: "Netflix",
			url: "https://www.netflix.com/",
		},
		96: {
			name: "Naver Store",
			url: "https://serieson.naver.com/movie/home.nhn",
		},
		97: {
			name: "Watcha",
			url: "https://watcha.com/",
		},
		119: {
			name: "Amazon Prime Video",
			url: "https://www.primevideo.com/",
		},
		356: {
			name: "wavve",
			url: "https://www.wavve.com/",
		},
	},
	TMDB_PATH = {
		IMAGE: "https://www.themoviedb.org/t/p/",
	};

export { LANGUAGE, MODEL, TMDB_PROVIERS };