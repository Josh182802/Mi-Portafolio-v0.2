import pkg from '@fullhuman/postcss-purgecss';

const purgeCSSPlugin = pkg.purgeCSSPlugin ?? pkg.default ?? pkg;

const isBuild = process.env.NODE_ENV === 'production';

export default {
  plugins: isBuild
    ? [
        purgeCSSPlugin({
          content: ['./index.html', './src/**/*.js'],
          // Clases que JS agrega en tiempo de ejecución
          safelist: ['is-open']
        })
      ]
    : []
};