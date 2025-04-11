import { gql } from '@apollo/client';

export const GET_BLOG_POST = gql`
  query GetBlogPost($id: ID!) {
    blogPost(id: $id) {
      id
      title
      author
      content
      createdAt
    }
  }
`;
