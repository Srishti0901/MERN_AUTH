const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//const { isEmail } = require(validator);

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //validate: isEmail
    },
    password: {
        type: String,
        required: true
    }
}, { minimize: false });

UserSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

UserSchema.statics.findByCredentials = async function (email, password) {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid Email or Password');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('invalid Email or Password');
    return user;
}

const User = mongoose.model('User', UserSchema);
module.exports = User