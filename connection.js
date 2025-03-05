const mySql2 = require('mysql2/promise');
require('dotenv').config();
const methods = {};

methods.connectToDB = async () => {
    try {
        const connectionResult = await mySql2.createConnection({
            port: process.env.DB_PORT,
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        console.log('SUCCESS: Connected to MySQL DB!');
        return connectionResult;
    }
    catch (error) {
        console.log(`ERROR during connection: `, error?.message ? error.message : `${JSON.stringify(error)}`);
    }
}

/*
callback version - use mysql instead of mysql2
connection.connect((err) => {
    if (!err) {
        console.log("Connection successful!");
    }
    else {
        console.log(`ERROR during connection: `, err?.message ?? `JSON.stringify(err)`);
    }
});
*/

/* Use IIFE (Immediately Invoked Function Expression) after thinking only!

(async () => {
    const db = await methods.connectToDB();
})();
*/

module.exports = methods;