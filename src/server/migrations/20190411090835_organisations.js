
exports.up = function(knex, Promise) {
    return knex.schema.createTable('organisations', t => {
        t.increments('id')
          .unsigned()
          .primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').notNull();
    
        t.string('name').notNull();
        t.text('slug').notNull();
    
        t.integer('ownerId').notNull();;
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('organisations');
};