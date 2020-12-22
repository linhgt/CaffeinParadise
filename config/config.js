require("dotenv").config();
module.exports = {
    "development": {
        "username": process.env.DBUSERNAME,
        "password": process.env.DBPASSWORD,
        "database": process.env.DB,
        "host": process.env.DBHOST,
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
    }
};
