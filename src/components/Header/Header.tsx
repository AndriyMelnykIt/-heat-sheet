import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import styles from './Header.module.css'

const Header = () => {
  const navigate = useNavigate();

  return <Button className={styles.btn} onClick={() => navigate('/')}>Home</Button>;
};

export default Header;
