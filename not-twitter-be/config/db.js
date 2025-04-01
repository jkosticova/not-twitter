const {Pool} = require('pg');
const {sconfig} = require('./config.secrets.js')

const pool = new Pool(sconfig.db);

module.exports = pool; 
