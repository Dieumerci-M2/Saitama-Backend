module.exports =  (sequelize,DataTypes) => {
    return sequelize.define('letter', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            
        },
        email: {
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