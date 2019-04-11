exports.seed = async knex => {
    // Deletes ALL existing entries
    return knex('organisations')
      .del()
      .then(() => {
        // Inserts seed entries
        return knex('organisations').insert([
          {
            id: 1,
            name: 'ReactFS',
            slug: 'reactfs',
            ownerId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      });
  };