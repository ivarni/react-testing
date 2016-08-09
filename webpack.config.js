const getConfig = require('hjs-webpack');

const config = getConfig({

    in: 'src/app.js',

    out: 'dist',

    output: {
        hash: true
    },

    clearBeforeBuild: '!(favicon.ico)'

});

if (process.env.NODE_ENV !== 'production') {
    config.devtools = 'source-map';
}

module.exports = config;
