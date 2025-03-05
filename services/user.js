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

methods.serviceToGetAllContacts = async () => {
    try {
        const allUsers = await userRepository.getAllContacts();
        return allUsers;
    }
    catch(error) {
        throw error;
    }
}

methods.serviceToUpdateContactByID = async (requestData) => {
    try {
        const updatedContact = await userRepository.updateContactByID(requestData);
        return updatedContact;
    }
    catch(error) {
        throw error;
    }
}

module.exports = methods;