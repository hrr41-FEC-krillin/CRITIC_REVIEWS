const Path = require('path');

const distPath = Path.join(__dirname, '/dist');

module.exports = {
  entry: './client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: distPath

  },
    module: {
        rules: [{      
            test: /\.(js|jsx)$/,      
            exclude: /node_modules/,      
            loader: 'babel-loader',
            options:{
              'presets': ['@babel/preset-env', '@babel/preset-react']
            }      
       }]  
    }
};