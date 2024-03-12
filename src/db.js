require("dotenv").config();
const { Sequelize } = require("sequelize");
const pg = require("pg");

// Importar los modelos
const UserModel = require("./models/user");

// Obtener la conexión a la base de datos desde las variables de entorno
const { DB_FULL_CONNECT } = process.env;

// Configurar la conexión a la base de datos
const sequelize = new Sequelize(DB_FULL_CONNECT, {
	logging: false,
	native: false,
	dialectModule: pg,
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
});

// Pasar la conexión a los modelos para que se asocien a la instancia de Sequelize
UserModel(sequelize);

// Obtener los modelos asociados
const { User } = sequelize.models;

// Exportar los modelos y la conexión
module.exports = {
	User,
	conn: sequelize,
};
