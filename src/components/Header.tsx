import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate('/')}>Home</Button>;
};

export default Header;
