// Enable typescript so gatsby doesn't fail when loading our source code
require('ts-node').register({ files: true });

exports.createPages = require('./gatsby/createPages').default;
