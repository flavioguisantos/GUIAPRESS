const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'guilherme', 'ctrl', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;