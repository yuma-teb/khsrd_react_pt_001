import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: [
			{
				find: /^~(.+)/,
				replacement: path.join(process.cwd(), "node_modules/$1"),
			},
			{
				find: /^src(.+)/,
				replacement: path.join(process.cwd(), "src/$1"),
			},
		],
	},
});
