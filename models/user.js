module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      googleId: {
          type: DataTypes.STRING,
          defaultValue:"JohnDoe11234"
        },
      name: {
          type: DataTypes.STRING,
          defaultValue: "John Doe"
      },
      userType: {
          type: DataTypes.STRING,
          defaultValue: "dafsdfasd"
          
      }
    });
    return User;
  };