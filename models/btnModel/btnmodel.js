module.exports = (sequelize, DataTypes) => {
    return sequelize.define('bitcoinOrder', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            
        },
        paymentAdress: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            require : true,
            
        },
        amount: {
            type: DataTypes.STRING,
            allowNull: true,
            require : true,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: true,
            require : true,
        },
        product: {
            type: DataTypes.INTEGER,
            allowNull: true,
            require : true,
        },
      
    },
        {
            timestamps: true,
            createdAt: 'created',
            updatedAt : false
        }
    )
};