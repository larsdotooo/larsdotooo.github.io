/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    compilier:{
        removeConsole: true,
    }
};

module.exports = withContentlayer({ ...nextConfig });
