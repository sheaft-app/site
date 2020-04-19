module.exports = {
	corePlugins: {},
	theme: {
		extend: {
			transitionProperty: {
				height: "height",
				width: "width",
			},
		},
	},
	variants: {
		width: ["responsive", "hover", "focus"],
		height: ["responsive", "hover", "focus"],
	},
	plugins: [],
};
