 require("dotenv").config();
 const withSass = require('@zeit/next-sass');

const withCSS = require("@zeit/next-css");

const withFonts = require("next-fonts");
const path = require('path')

module.exports = withCSS({


    // env: {
    //     API_URL: process.env.API_URL
    // }
});

module.exports = withCSS(withSass({

    env:{
        API_URL:process.env.API_URL

    },


    webpack :(config, options) =>{
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            },

            
        });
        config.resolve.alias['components']= path.join(__dirname, 'components')
        config.resolve.alias['public']= path.join(__dirname, 'public')
        return config;
    }
}));