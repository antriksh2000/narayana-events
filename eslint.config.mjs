import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettierRecommended from "eslint-plugin-prettier/recommended";

const config = [
  { ignores: [".next/**", "node_modules/**", ".removed-files/**", "next-env.d.ts"] },
  ...nextVitals,
  ...nextTypescript,
  prettierRecommended,
  {
    rules: {
      // Images in public/images are already optimised WebP with explicit srcset.
      "@next/next/no-img-element": "off",
    },
  },
];

export default config;
