'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.INTEGER
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    },
    specs: {
        type: DataTypes.JSONB
    }
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};
