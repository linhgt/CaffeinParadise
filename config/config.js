require("dotenv").config();
module.exports = {
    "development": {
        "username": "gvcz0xkf9cfmsiew",
        "password": "zqdb8derqgo7sszm",
        "database": "a5try1pio94bbzto",
        "host": "jhdjjtqo9w5bzq2t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
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
        "dialect": "mysql",
        "dialectOptions":{
            ssl: true
        }
    }
};
