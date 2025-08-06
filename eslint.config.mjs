import eslint from "@eslint/js"
import tseslint from "typescript-eslint"

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      indent: ["error", 2],
      quotes: ["error", "double"],
      semi: ["error", "never"]
    },
    ignores: [
      "dist/",
      "node_modules/",
      "*.js",
      ".env*"
    ]
  }
)
