import styled from '@emotion/styled';
import { Card, Typography, TypographyProps } from '@mui/material';

export const StyledBlogPostContainer = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '1200px',
  } as const;
});

export const StyledBlogPostCard = styled(Card)(() => {
  return {
    display: 'flex',
  };
});

export const StyledBlogPostContent = styled(Typography)<TypographyProps>(() => {
  return {
    marginTop: '24px',
    maxWidth: '800px',
  };
});

export const StyledPubilshedWrapper = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
  } as const;
});
