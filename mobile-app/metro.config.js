const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push('html');
config.resolver.assetExts.push('css');
config.resolver.assetExts.push('txt'); // Treat .txt as an asset, not code

module.exports = config;
