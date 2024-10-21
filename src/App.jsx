import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Cars from './components/Cars';
import Nav from './components/Nav';

const App = () => {
  const [user, setUser] = useState(null);
  const [carBrands, setCarBrands] = useState([]);
  const [carModels, setCarModels] = useState([]);

  const handleLoginSuccess = (data) => {
    setUser(data.user);
    setCarBrands(data.carbrand);
    setCarModels(data.carmodel);
  };

  return (
    <div className='container-app'>
    <Router>
      {user && <Nav />}
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
