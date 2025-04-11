import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type BlogPost {
    id: ID!
    title: String!
    author: String!
    content: String!
    createdAt: String!
  }

  type Query {
    blogPosts: [BlogPost]
    blogPost(id: ID!): BlogPost
  }

  type Mutation {
    createBlogPost(title: String!, author: String!, content: String!): BlogPost
  }
`;
