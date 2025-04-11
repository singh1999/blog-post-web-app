import { gql } from '@apollo/client';

export const CREATE_BLOG_POST = gql`
  mutation createBlogPost(
    $title: String!
    $author: String!
    $content: String!
  ) {
    createBlogPost(title: $title, author: $author, content: $content) {
      title
      author
      content
    }
  }
`;
