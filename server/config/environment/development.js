'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // Sequelize connecton opions
  sequelize: {
    uri: 'postgres://@localhost/sustainable-seafood-development',
    options: {
      dialect: 'postgres',
      port: 5432,
      host: 'localhost',
      define: {
        timestamps: true
      }
    }
  },

  // Seed database on startup
  seedDB: true

};
