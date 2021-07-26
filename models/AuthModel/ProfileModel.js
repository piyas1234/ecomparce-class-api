
const mongoose = require('mongoose');

// User Schema
const profileSchema = new mongoose.Schema(
	{

		user:{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'user',
			required:true,
        },
		bio: {
			type: String,
			required: true,
		},
		adress: {
			type: String,
			unique: true,
			required: true,
			 
		},
		image: {
			type: String,
			required: true,
		},
        
	},
	{ timestamps: true }
);


const ProfileModel = mongoose.model('profile', profileSchema);

module.exports = ProfileModel;