import BaseModel from '../lib/BaseModel';
import Users from './Users'
export const schema = {
  type: 'object',
  required: ['name', 'slug', 'ownerId'],

  properties: {
    id: { type: 'integer' },
    name: { type: 'string' },
    slug: { type: 'string' },
    owner: { type: 'object' },
  },
};

class Organisations extends BaseModel {
  static get tableName() {
    return 'organisations';
  }

  static get relationMappings() {
    return {
      owner: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Users,
        join: {
          from: 'organisations.ownerId',
          to: 'users.id',
        },
      },
    };
  }

  static get jsonSchema() {
    return schema;
  }
}
export default Organisations;
