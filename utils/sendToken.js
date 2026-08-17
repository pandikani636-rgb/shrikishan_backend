const sendToken = async (user, statusCode, res) => {
    const token = typeof user.getJWTToken === 'function' ? user.getJWTToken() : "";

    const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), 
        httpOnly: true
    };
    
    let userData = user.toObject ? user.toObject() : user;

    const Role = require('../models/roleModel');
    try {
        const roleDoc = await Role.findOne({ name: new RegExp(`^${userData.role}$`, 'i') });
        userData.permissions = roleDoc ? roleDoc.permissions : [];
    } catch (e) {
        userData.permissions = [];
    }

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        user: userData,
        token,
    });
}

module.exports = sendToken;