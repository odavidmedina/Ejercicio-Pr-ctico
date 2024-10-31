import { Box, Typography, Avatar } from '@mui/material';
import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  return (
    <Box display="flex" alignItems="center" minHeight="100vh" width="100vw" sx={{
      backgroundImage: `url('src/imgs/profile.jpg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <Box p={2} bgcolor="white" borderRadius={10} boxShadow="0 2px 10px rgba(0, 0, 0, 0.1)" maxWidth={500} mx="auto" textAlign="center">
        <Box display="flex" alignItems="center" justifyContent="center" mb={1} ml={0} mr={1}>
          <Avatar sx={{ mr: '15px' }} />
          <Typography variant="h5">Bienvenido, {user.first_name} {user.last_name}</Typography>
        </Box>
        <Typography variant="body1">Email: {user.email}</Typography>
        <Typography variant="body1">Password: No disponible</Typography>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
