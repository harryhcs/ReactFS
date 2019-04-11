exports.seed = async knex => {
    // Deletes ALL existing entries
  
  
    return knex('users')
      .del()
      .then(() => {
        // Inserts seed entries
        return knex('users').insert([
          {
            id: 1,
            email: 'her.stander@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      });
  };