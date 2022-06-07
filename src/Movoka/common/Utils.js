export default {
	generateMovieDetailsURL: function (m_id) {
		return `/${m_id}`;
	},

	getPlayTime: function (min) {
		const minNum = min;
		if (typeof min === "String") {
			minNum = parseInt(min, 10);
		}
		return `${Math.round(minNum / 60)} h ${minNum % 60} m`;
	},

	joinStrList: function (list) {
		return list.join(" ・ ");
	},

	getDominantColorOfImg: function (imgEl) {
		var blockSize = 5, // only visit every 5 pixels
			defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
			canvas = document.createElement("canvas"),
			context = canvas.getContext && canvas.getContext("2d"),
			data,
			width,
			height,
			i = -4,
			length,
			rgb = { r: 0, g: 0, b: 0 },
			count = 0;

		if (!context) {
			return defaultRGB;
		}

		height = canvas.height =
			imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
		width = canvas.width =
			imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

		context.drawImage(imgEl, 0, 0);

		canvas.toBlob((blob) => {
			console.log(blob);
		});

		// try {
		//     data = context.getImageData(0, 0, width, height);
		// } catch(e) {
		//     return defaultRGB;
		// }

		// length = data.data.length;

		// while ( (i += blockSize * 4) < length ) {
		//     ++count;
		//     rgb.r += data.data[i];
		//     rgb.g += data.data[i+1];
		//     rgb.b += data.data[i+2];
		// }

		// // ~~ used to floor values
		// rgb.r = ~~(rgb.r/count);
		// rgb.g = ~~(rgb.g/count);
		// rgb.b = ~~(rgb.b/count);

		// return rgb;
	},
};
