const esbuild = require("esbuild");

// Options de configuration de base
esbuild
  .build({
    entryPoints: ["./assets/script.min.js"], // Point d'entrée de votre application
    bundle: true, // Active le regroupement des fichiers
    minify: true, // Active la minification
    sourcemap: true, // Active les sourcemaps
    target: "es2015", // Définit la version du langage cible (ici, ECMAScript 2015)
    outfile: "./dist/bundle.js", // Chemin de sortie du fichier regroupé
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
