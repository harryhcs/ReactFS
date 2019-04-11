import BaseModel from '../lib/BaseModel';
import Organisations from './Organisations'
export const schema = {
  type: 'object',
  required: ['email'],

  properties: {
    id: { type: 'integer' },
    email: { type: 'string' },
  },
};

export default class Users extends BaseModel {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    return {
      organisations: {
        relation: BaseModel.HasManyRelation,
        modelClass: Organisations,
        join: { from: 'users.id', to: 'organisations.ownerId' },
      },
    };
  }

  static get jsonSchema() {
    return schema;
  }
}
