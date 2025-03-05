const userRepository = require('../repositories/user');

const methods = {}
methods.serviceForUserSignUp = async (requestData) => {
    try {
        const signedUpUser = await userRepository.userSignUp(requestData);
        return signedUpUser;
    }
    catch(error) {
        throw error;
    }
}

module.exports = methods;