module.exports = (sequelize,DataTypes) => {
    return sequelize.define('paiement', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            
        },
         titre: {
            type: DataTypes.STRING,
            allowNull: true,
            
        },
        montant: {
            type: DataTypes.STRING,
            allowNull: true,
            
        },
        adress_from: {
            type: DataTypes.STRING,
            allowNull: true,
        },
         adress_to: {
            type: DataTypes.STRING,
            allowNull: true,
		}
        
      
    },
        {
            timestamps: true,
            createdAt: 'created',
            updatedAt : false
        }
    )
};