
//Import the necessary Modules
const mongoose = require('mongoose');

// DB schema for user creation with fields { username, email, password }

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    }
});


module.export = User = mongoose.model('UserSchema',UserSchema)


