import { gql, AuthenticationError, ValidationError } from 'apollo-server';

import Organisations from '../models/Organisations';
import Users from '../models/Users';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  type Organisation {
    id: ID!
    name: String!
    slug: String!
    createdAt: Date
    owner: User
  }

  input OrganisationInput {
    name: String!
    slug: String!
    owner_id: ID!
  }
  extend type Query {
    organisations: [Organisation]
  }
  extend type Mutation {
    organisationCreate(organisation: OrganisationInput!): Organisation
  }
`;

export const resolvers = {
  Query: {
    organisations: async (_,{}, { user }) => {
      try {
        const email = await user
        const owner = await Users.query().findOne({email})
        const organisations = Organisations.query().where('ownerId', owner.id)

        return organisations
      } catch (e) {
        console.log(e)
        throw new AuthenticationError('You must be logged in to do this');
      }
    },
  },
  Mutation: {
    organisationCreate: (_, args) => (
      Organisations.query().insert(args.category)
    ),
  }
};
