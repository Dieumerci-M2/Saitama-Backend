module.exports = (sequelize,DataTypes) => {
    return sequelize.define('formation', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            
        },
        titre: {
            type: DataTypes.STRING,
            allowNull: true,
            
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
		},
		prix: {
            type: DataTypes.STRING,
            allowNull: true,
		},
		contenu: {
            type: DataTypes.STRING,
            allowNull: true,
		},
		pic: {
			type: DataTypes.STRING,
			allowNull: false,
			isURL : true
		}
        
      
    },
        {
            timestamps: true,
            createdAt: 'created',
            updatedAt : false
        }
    )
};