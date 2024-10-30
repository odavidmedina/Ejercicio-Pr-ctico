import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Container, TextField, Button, Typography, Alert } from '@mui/material';

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
    <Container maxWidth="xs" sx={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <Container sx={{ p: 3, borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url('/src/imgs/login.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'white', fontFamily: 'Arial, sans-serif', textShadow: '1px 1px 2px black' }}>
          Iniciar Sesión
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="filled"
            color="secondary"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ backgroundColor: 'white', borderRadius: '5px'}}
          />
          <TextField
            variant="filled"
            color="secondary"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ backgroundColor: 'white', borderRadius: '5px' }}
          />
          {error && (
            <Alert severity="error" sx={{ width: '90%', mt: 2 }}>{error}</Alert>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Acceder'}
          </Button>
        </form>
      </Container>
    </Container>
  );
};

export default Login;
