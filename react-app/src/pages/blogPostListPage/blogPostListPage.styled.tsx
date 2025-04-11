import styled from '@emotion/styled';

export const StyledBlogPostListContainer = styled('div')(() => {
  return {
    display: 'grid',
    maxWidth: '1800px',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '32px 16px',
    '@media (max-width: 1200px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    '@media (max-width: 900px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  } as const;
});
