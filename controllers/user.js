const userService = require('../services/user');

const methods = {}
methods.controllerForUserSignUp = async (req, res) => {
    try {
        const requestData = req.body;
        const response = await userService.serviceForUserSignUp(requestData);
        return res.status(200).json({ status: true, message: "Request processed successfully", response });
    }
    catch (error) {
        return res.status(500).json({
            status: false,
            message: "Request processed with error",
            error: {
                errorDetails: error?.message ?? "ERROR: Internal server error! Failed to sign up.",
                code: error?.code ?? undefined,
                sql: error?.sql ?? undefined,
                sqlState: error?.sqlState ?? undefined,
                sqlMessage: error?.sqlMessage ?? undefined
            }
        });
    }
}

methods.controllerToGetAllContacts = async (req, res) => {
    try {
        const response = await userService.serviceToGetAllContacts();
        return res.status(200).json({ status: true, message: "Request processed successfully", response });
    }
    catch (error) {
        return res.status(500).json({
            status: false,
            message: "Request processed with error",
            error: {
                errorDetails: error?.message ?? "ERROR: Failed to fetch all contacts!",
                code: error?.code ?? undefined,
                sql: error?.sql ?? undefined,
                sqlState: error?.sqlState ?? undefined,
                sqlMessage: error?.sqlMessage ?? undefined
            }
        });
    }
}

methods.controllerToUpdateContactByID = async (req, res) => {
    try {
        const requestData = req.body;
        const response = await userService.serviceToUpdateContactByID(requestData);
        return res.status(200).json({ status: true, message: "Request processed successfully", response });
    }
    catch (error) {
        return res.status(500).json({
            status: false,
            message: "Request processed with error",
            error: {
                errorDetails: error?.message ?? "ERROR: Failed to fetch all contacts!",
                code: error?.code ?? undefined,
                sql: error?.sql ?? undefined,
                sqlState: error?.sqlState ?? undefined,
                sqlMessage: error?.sqlMessage ?? undefined
            }
        });
    }
}

methods.controllerToAddContact = async (req, res) => {
    try {
        const requestData = req.body;
        const response = await userService.serviceToAddContact(requestData);
        return res.status(200).json(
            {
                status: true,
                message: "Request processed successfully",
                response
            }
        );
    }
    catch (error) {
        return res.status(500).json({
            status: false,
            message: "Request processed with error",
            error: {
                errorDetails: error?.message ?? "ERROR: Failed to add a contact!",
                code: error?.code ?? undefined,
                sql: error?.sql ?? undefined,
                sqlState: error?.sqlState ?? undefined,
                sqlMessage: error?.sqlMessage ?? undefined
            }
        });
    }
}

module.exports = methods;