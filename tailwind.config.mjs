/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'black-blue' : '#1A202C'
			},

			"animation": {
				"text-gradient": "text-gradient 3s linear infinite"
			  },
			  "keyframes": {
				"text-gradient": {
				  "to": {
					"backgroundPosition": "200% center"
				  }
				}
			  }
		},
	},
	plugins: [],
}
