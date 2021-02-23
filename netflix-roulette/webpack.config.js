const developmentConfig = require('./webpack.config.dev');
const productionConfig = require('./webpack.config.prod');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = () => (isDevelopment ? developmentConfig : productionConfig);
