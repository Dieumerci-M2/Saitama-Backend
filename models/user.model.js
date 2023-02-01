module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoInscrement:true
            
        },
        username : {
            type: DataTypes.STRING,
            allowNull: true,
            
        },
        email : {
            type: DataTypes.STRING,
             allowNull: true,
        },
        password : {
            type: DataTypes.STRING,
             allowNull: true,
        },
      
    },
      {
            timestamps: true,
            createdAt: "create",
            updatedAt : true
        });
}