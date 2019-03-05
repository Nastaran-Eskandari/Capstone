'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('comments', [
        {
        text: 'I finally made it',
        emoji: ':)',
        tag_id: 1,
      },
      {
        text: 'yaaay',
        emoji: ':)',
        tag_id: 2,
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     
      return queryInterface.bulkDelete('comments', null, {});
   
  }
};
