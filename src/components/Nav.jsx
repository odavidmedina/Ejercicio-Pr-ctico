import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../imgs/logo.jpg'; 

const Nav = ({ onLogout }) => {
  return (
    <AppBar position="fixed" sx={{ width: '100%', top: 0, backgroundColor: '#333' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box component="img" src={logo} alt="Logo" sx={{ width: '50px', height: 'auto', marginRight: '20px', borderRadius: '50%' }} />
        <Box>
          <Button component={Link} to="/profile" sx={{ color: 'white', margin: '0 10px', backgroundColor: '#555', ':hover': { backgroundColor: '#777' } }}>Perfil</Button>
          <Button component={Link} to="/cars" sx={{ color: 'white', margin: '0 10px', backgroundColor: '#555', ':hover': { backgroundColor: '#777' } }}>Autos</Button>
        </Box>
        <Button onClick={onLogout} sx={{ color: 'white', backgroundColor: 'red', ':hover': { backgroundColor: '#cc0000' }}}>Cerrar Sesión</Button>
      </Toolbar>
    </AppBar>
  );
};

Nav.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Nav;
