module.exports = (sequelize,DataTypes) => {
    return sequelize.define('message', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: true,
            
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: true,
		},
		email: {
            type: DataTypes.STRING,
            allowNull: true,
		},
		number: {
            type: DataTypes.STRING,
            allowNull: true,
		},
		message: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        sujet: {
            type: DataTypes.STRING,
            allowNull: true,
		},
        
      
    },
        {
            timestamps: true,
            createdAt: 'created',
            updatedAt : false
        }
    )
};