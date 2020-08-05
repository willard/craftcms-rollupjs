import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';
import postcssUrl from 'postcss-url';

export default {
    input: {
        main:'src/main.js', 
        "_singles/_home/index":'templates/_views/_singles/_home/index.js',
        "_blocks/_table/index":'templates/_includes/_blocks/_table/index.js',
        "_blocks/_photo-galley/index":'templates/_includes/_blocks/_photo-gallery/index.js',
        "_blocks/_rich-text/index":'templates/_includes/_blocks/_rich-text/index.js',
    },
    output: {
        dir: 'web/assets/dist/',
        format: 'esm'
    },
    plugins: [
        resolve(),
        postcss({
            plugins: [
                tailwindcss(),
                autoprefixer(),
                postcssImport(),
                postcssNested(),
                postcssUrl()
            ],
            sourceMap: true,
            modules: false,
            extract: true,
        }),
    ],
    watch: {
        include: ['src/**', 'templates/**'],
        exclude: 'node_modules/**'
    }
  };