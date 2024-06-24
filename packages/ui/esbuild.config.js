const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["./src/index.tsx"],
    bundle: true,
    outdir: "dist",
    sourcemap: true,
    external: ["react", "react-dom"],
    format: "cjs",
    target: ["es6"],
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
    loader: { ".tsx": "tsx" },
  })
  .catch(() => process.exit(1));
