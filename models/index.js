const { Sequelize, DataTypes } = require("sequelize");

const dbConexion = () => {
const sequelize = new Sequelize(
	'saitama',
	'root',
	'',
	{
		host: 'localhost',
		dialect: 'mariadb',
		dialectOptions: {
			timezone: "Etc/GMT-2"
		},
		logging : false
		
	},
)

sequelize.sync({ force: true })
	.then(_ => {
	console.log("la base de donné a été synchroniseé avec succée");
})
sequelize.authenticate()
	.then(_ => console.log("vous étes conecter a la base de donnée"))
	
 .catch(err => console.log('no connexion to dtb', err))
}
module.exports = dbConexion;

