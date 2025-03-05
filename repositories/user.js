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
        console.log(error);
        throw error;
    }
}

module.exports = methods;