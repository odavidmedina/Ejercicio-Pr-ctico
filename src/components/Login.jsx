import { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css'
import PropTypes from 'prop-types';

const Login = ({ onLoginSuccess }) => {
  Login.propTypes = {
    onLoginSuccess: PropTypes.func.isRequired,
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^[a-zA-Z0-9]+$/;
    return re.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('El email no es válido');
      return;
    }
    if (!validatePassword(password)) {
      setError('La contraseña debe ser alfanumérica');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await axios.post('https://test.silicon-access.com/fapi/auth/login/', {
        username: email,
        password: password,
      });
      onLoginSuccess(response.data);
    } catch (error) {
        setError(error.response.data.message || 'Error en el login. Verifique sus datos');
    }finally {
      setLoading(false);
    }
  };

  return (
    <div className='container-flex'>
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Cargando...' : 'Acceder'}
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;
