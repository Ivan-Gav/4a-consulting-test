import postcssPresetEnv from 'postcss-preset-env'

export default {
	plugins: [
		postcssPresetEnv({
			"browsers": [
				"> 0.2% and not dead"
			],
			"features": {
				"nesting-rules": [
					"auto",
					{
						"edition": "2024-02"
					}
				]
			}
		})
	]
}