const methods = {}
const connection = require('../connection');

methods.userSignUp = async (requestData) => {
    try {
        const mySql2 = await connection.connectToDB();
        const user = requestData;
        let query = `select email, password, role, status from user where email=?`;
        const [rows, fields] = await mySql2.query(query, [user.email]);
        if (rows || fields) {
            query = "insert into user(name, mobile, email, role, password, status) values(?, ?, ?, 'user', ?, 'ACTIVE')";
            const [newInsertionRow] = await mySql2.query(query, [user.name, user.mobile, user.email, user.password]);
            if (newInsertionRow) {
                return { registrationMessage: "User has been registered successfully!" };
            }
            else {
                console.log(newInsertionRow);
                throw { error: { message: "ERROR: While inserting data in DB table", ...newInsertionRow } };
            }
        }
        else {
            console.log(JSON.stringify(`${rows, fields}`));
            throw {
                error: {
                    message: "ERROR: While fetching data from DB table"
                }
            }
        }
    }
    catch (error) {
        logAndThrowError(error);
    }
}

methods.getAllContacts = async () => {
    try {
        const mySql2 = await connection.connectToDB();
        const queryToFetchAllContacts = `select * from contact`;
        const [rows, fields] = await mySql2.query(queryToFetchAllContacts);
        if (rows || fields) {
            if (Array.isArray(rows) && rows.length) {
                return rows;
            }
            else {
                return [];
            }
        }
        else {
            throw {
                error: {
                    message: "ERROR: While fetching data from DB table"
                }
            }
        }
    }
    catch (error) {
        logAndThrowError(error);
    }
}

methods.updateContactByID = async (requestData) => {
    try {
        const mySql2 = await connection.connectToDB();
        if (requestData?.name) {
            const queryToUpdateName = `update contact set name=? where id=?`;
            const [result] = await mySql2.query(queryToUpdateName, [requestData.name, requestData.id]);
            if (result?.affectedRows < 1) {
                throw {
                    error: {
                        message: "ERROR: While trying to update the name of the record."
                    }
                }
            }
        }
        if (requestData?.email) {
            const queryToUpdateEmail = `update contact set email=? where id=?`;
            const [result] = await mySql2.query(queryToUpdateEmail, [requestData.email, requestData.id]);
            if (result?.affectedRows < 1) {
                throw {
                    error: {
                        message: "ERROR: While trying to update the email ID of the record."
                    }
                }
            }
        }
        if (requestData?.mobile) {
            const queryToUpdateMobile = `update contact set mobile=? where id=?`;
            const [result] = await mySql2.query(queryToUpdateMobile, [requestData.mobile, requestData.id]);
            if (result?.affectedRows < 1) {
                throw {
                    error: {
                        message: "ERROR: While trying to update the mobile number of the record."
                    }
                }
            }
        }
        return { ID: requestData.id };
    }
    catch (error) {
        logAndThrowError(error);
    }
}

const logAndThrowError = (error) => {
    console.log(error);
    throw error;
}

module.exports = methods;