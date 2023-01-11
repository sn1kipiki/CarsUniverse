const sequelize = require("../db");

const { DataTypes } = require("sequelize");
const { databaseVersion } = require("../db");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});
const OrderCar = sequelize.define("order_car", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Car = sequelize.define("car", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  // rating: { type: DataTypes.INTEGER, defaultValue: 0 },

  img: { type: DataTypes.STRING, allowNull: false },
  access: { type: DataTypes.STRING, allowNull: false, defaultValue: "TRUE" },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Brand = sequelize.define("brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const CarInfo = sequelize.define("car_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const TypeBrand = sequelize.define("type_brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(OrderCar);
OrderCar.belongsTo(User);

Type.hasMany(Car);
Car.belongsTo(Type);

Brand.hasMany(Car);
Car.belongsTo(Brand);

Car.hasMany(CarInfo, { as: "info" });
CarInfo.belongsTo(Car);

Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });

module.exports = {
  User,
  OrderCar,
  Car,
  Type,
  Brand,
  TypeBrand,
  CarInfo,
};
