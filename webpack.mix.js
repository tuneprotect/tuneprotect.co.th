const mix = require('laravel-mix');
require("@babel/polyfill")
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.webpackConfig({
    devServer: {port: '80'},
    resolve: {
        modules: ['node_modules']
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {from: 'resources/images', to: 'images'}
            ],
        }),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg|webp)$/i,
            plugins: [
                imageminMozjpeg({
                    quality: 80,
                })
            ]
        })
    ]
});

mix.options({
    terser: {
        extractComments: false,
    }
})

mix.react('resources/backstage_source/index.js', 'public/js/backstage')
    .js('resources/js/main.js', 'public/js/frontend')
    .js('resources/js/index.js', 'public/js/frontend')
    .js('resources/js/product.js', 'public/js/frontend')
    .js('resources/js/article.js', 'public/js/frontend')
    .js('resources/js/hospital.js', 'public/js/frontend')
    .js('resources/js/contactus.js', 'public/js/frontend')
    .js('resources/js/service.js', 'public/js/frontend')
    .js('resources/js/organization.js', 'public/js/frontend')
    .js('resources/js/biglife.js', 'public/js/frontend')
    .js('resources/js/amado.js', 'public/js/frontend')
    .js('resources/js/tg.js', 'public/js/frontend')
    .js('resources/js/product/onpaca.js', 'public/js/frontend/product/')
    .js('resources/js/product/onpakd.js', 'public/js/frontend/product/')
    .js('resources/js/product/ontadm.js', 'public/js/frontend/product/')
    .js('resources/js/product/ontaln.js', 'public/js/frontend/product/')
    .js('resources/js/product/onpasn.js', 'public/js/frontend/product/')
    .js('resources/js/product/oncovida.js', 'public/js/frontend/product/')
    .js('resources/js/product/oncovidl.js', 'public/js/frontend/product/')
    .js('resources/js/product/onta.js', 'public/js/frontend/product/')
    .js('resources/js/product/onvacina.js', 'public/js/frontend/product/')
    .js('resources/js/product/onvsafea.js', 'public/js/frontend/product/')
    .js('resources/js/product/ci.js', 'public/js/frontend/product/')
    .js('resources/js/product/onpacaa.js', 'public/js/frontend/product/')
    .js('resources/js/product/onpakda.js', 'public/js/frontend/product/')
    .js('resources/js/product/onpasna.js', 'public/js/frontend/product/')
    .js('resources/js/product/onfimp.js', 'public/js/frontend/product/')
    .js('resources/js/product/ontaob.js', 'public/js/frontend/product/')
    .js('resources/js/product/cvisafe.js', 'public/js/frontend/product/')
    .js('resources/js/product/cvcare.js', 'public/js/frontend/product/')
    .js('resources/js/product/oncovidmw.js', 'public/js/frontend/product/')
    .js('resources/js/product/tgcvlp.js', 'public/js/frontend/product/')
    .sass('resources/sass/style.scss', 'public/css/frontend')
    .browserSync('https://staging.tuneprotect.local')
    .version();
