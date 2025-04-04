const path = require('path');

module.exports = {
  entry: './index.js', // Point d'entrée
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Dossier de sortie
  },
  mode: 'production'
};
