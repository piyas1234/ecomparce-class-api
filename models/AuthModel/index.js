
const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
			 
		},
		password: {
			type: String,
			required: true,
		},
		permission: {
			type: String,
			required: true,
		}
        
	},
	{ timestamps: true }
);


const AuthModel = mongoose.model('user', userSchema);

module.exports = AuthModel;