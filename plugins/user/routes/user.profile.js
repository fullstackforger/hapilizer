const defaultCtrl = require('./default.js');
const User = require('../model');

exports.get = {
	handler: defaultCtrl.any.handler,
	auth: 'basic'
};