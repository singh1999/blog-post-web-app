import { useQuery } from '@apollo/client';
import { BlogPost } from './blogPostPage.types';
import {
  StyledBlogPostContainer,
  StyledBlogPostContent,
  StyledPubilshedWrapper,
} from './blogPostPage.styled';
import { Typography } from '@mui/material';
import { GET_BLOG_POST } from '../../services/queries/blogPostQuery';
import { useParams } from 'react-router-dom';

export const BlogPostPage = () => {
  const { id } = useParams();
  const { data } = useQuery<BlogPost>(GET_BLOG_POST, {
    variables: { id },
  });
  const blogPost = data?.blogPost;
  return (
    <StyledBlogPostContainer>
      <Typography variant='h3' component='h1'>
        {blogPost?.title}
      </Typography>
      <StyledBlogPostContent variant='h5' component='p'>
        {blogPost?.content}
      </StyledBlogPostContent>
      <StyledPubilshedWrapper>
        <Typography variant='subtitle1'>
          {'Author: ' + blogPost?.author}
        </Typography>
        <Typography variant='subtitle1'>
          {'Published: ' + blogPost?.createdAt}
        </Typography>
      </StyledPubilshedWrapper>
    </StyledBlogPostContainer>
  );
};
