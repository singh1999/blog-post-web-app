import React from 'react';
import { ContainerProps } from '@mui/material/Container';
import { StyledContainer } from './container.styled';

export const Container = (props: ContainerProps) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};
