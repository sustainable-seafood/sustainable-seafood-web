'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/sustainableseafoodweb-test'
  },
  sequelize: {
    uri: 'postgres://@localhost/sustainable-seafood-test',
    options: {
      dialect: 'postgres',
      port: 5432,
      host: 'localhost',
      define: {
        timestamps: true
      }
    }
  }
};
