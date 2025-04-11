import styled from '@emotion/styled';
import { Card, CardProps, Typography } from '@mui/material';

type LinkCardProps = CardProps & { to?: string };

export const StyledBlogPostCard = styled(Card)<LinkCardProps>(() => {
  return {
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
    backgroundColor: 'offwhite',
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
    },
  };
});

export const StyledBlogPostCardContent = styled(Typography)(({ theme }) => {
  return {
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  };
});

export const StyledTopTextWrapper = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
  } as const;
});
