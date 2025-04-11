import { useLocation } from 'react-router-dom';
import { CreateBlogPostDialog } from '../createBlogPostDialog';
import { StyledHeaderContainer, StyledLink } from './header.styled';
import { Button } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';

export const Header = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <StyledHeaderContainer>
      {isHome ? (
        <CreateBlogPostDialog />
      ) : (
        <StyledLink to={`/`}>
          <Button
            startIcon={<InventoryIcon />}
            variant='contained'
            color='inherit'
          >
            See all blog posts
          </Button>
        </StyledLink>
      )}
    </StyledHeaderContainer>
  );
};
