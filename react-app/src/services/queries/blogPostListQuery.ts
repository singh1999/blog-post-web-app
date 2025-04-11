import { gql } from '@apollo/client';

export const GET_BLOG_POSTS = gql`
  query GetBlogPosts {
    blogPosts {
      id
      title
      author
      content
      createdAt
    }
  }
`;
