import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const StyledContainer = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: `16px 46px`,
  } as const;
});

export const StyledHeader = styled(Typography)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    margin: `46px auto 0`,
  };
});
