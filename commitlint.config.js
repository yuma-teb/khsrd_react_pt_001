export default {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-enum": [
			2, // Error level
			"always", // Always apply this rule
			[
				"add",
				"feat",
				"init",
				"fix",
				"docs",
				"style",
				"refactor",
				"chore",
				"config",
			], // Only allow these types
		],
		"subject-case": [2, "never", ["sentence-case"]],
		"body-case": [],
	},
};
