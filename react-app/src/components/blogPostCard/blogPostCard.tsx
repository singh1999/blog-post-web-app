import { CardContent, Typography } from '@mui/material';
import { blogPostCardProps } from './blogPostCard.types';
import {
  StyledBlogPostCard,
  StyledBlogPostCardContent,
  StyledTopTextWrapper,
} from './blogPostCard.styled';
import { Link } from 'react-router-dom';

export const BlogPostCard = ({ blogPost }: blogPostCardProps) => {
  const { id, title, author, content, createdAt } = blogPost;

  return (
    <StyledBlogPostCard component={Link} to={`/blogPost/${id}`}>
      <CardContent>
        <StyledTopTextWrapper>
          <Typography variant='overline'>{author}</Typography>
          <Typography variant='overline'>{createdAt}</Typography>
        </StyledTopTextWrapper>
        <Typography variant='h5'>{title}</Typography>
        <StyledBlogPostCardContent variant='body1'>
          {content}
        </StyledBlogPostCardContent>
      </CardContent>
    </StyledBlogPostCard>
  );
};
