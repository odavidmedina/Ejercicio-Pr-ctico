import '../styles/Profile.css'
import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  return (
    <div className='profile-flex'>
    <div className="profile-container">
      <h1>Bienvenido, {user.first_name} {user.last_name}</h1>
      <p>Email: {user.email}</p>
      <p>Password: No disponible</p>
    </div>
    </div>
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
