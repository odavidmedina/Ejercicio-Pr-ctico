import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Cars from './components/Cars';
import Nav from './components/Nav';

const App = () => {
  const [user, setUser] = useState(null);
  const [carBrands, setCarBrands] = useState([]);
  const [carModels, setCarModels] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser.user);
      setCarBrands(parsedUser.carbrand);
      setCarModels(parsedUser.carmodel);
    }
  }, []);

  const handleLoginSuccess = (data) => {
    setUser(data.user);
    setCarBrands(data.carbrand);
    setCarModels(data.carmodel);
    localStorage.setItem('user', JSON.stringify(data));
  };

  const handleLogout = () => {
    setUser(null);
    setCarBrands([]);
    setCarModels([]);
    localStorage.removeItem('user');
  };

  return (
    <div className='container-app'>
      <Router>
        {user && <Nav onLogout={handleLogout} />}
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/profile" /> : <Login onLoginSuccess={handleLoginSuccess} />}
          />
          <Route
            path="/profile"
            element={user ? <Profile user={user} /> : <Navigate to="/" />}
          />
          <Route
            path="/cars"
            element={user ? <Cars carBrands={carBrands} carModels={carModels} /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
