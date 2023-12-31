import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import webpack from 'webpack';

// Load environment variables from .env file
const env = dotenv.config().parsed;

// Create an object with the values of the environment variables
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'main'), // Replace with the entry file of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Replace with the desired output directory
    filename: 'bundle.js', // Replace with the desired output filename
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    fallback: {
      path: false,
      os: false,
      crypto: false,
    },
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname), // Set the root folder as the static directory
    },
    port: 3000, // Replace with the desired development server port
    hot: true,
  },
  target: 'web',
};
