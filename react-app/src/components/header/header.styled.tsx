import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledHeaderContainer = styled('div')(() => {
  return {
    display: 'flex',
    height: '64px',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'end',
    padding: '0 16px',
    position: 'sticky',
    top: -1,
  } as const;
});

export const StyledLink = styled(Link)(() => {
  return {
    color: 'black',
  };
});
