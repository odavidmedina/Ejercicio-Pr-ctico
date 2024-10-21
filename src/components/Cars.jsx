import { useState } from 'react';
import '../styles/Cars.css'
import PropTypes from 'prop-types';

const Cars = ({ carBrands, carModels }) => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleBrandClick = (brandCode) => {
    setSelectedBrand(selectedBrand === brandCode ? null : brandCode);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBrands = carBrands.filter((brand) => 
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredModels = carModels.filter((model) => {
    const brand = carBrands.find((b) => b.code === model.brand_code);
    return brand && brand.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="cars-container">
      <div className="cars-search">
        <h2>Modelos de Autos</h2>
        <input
          type="text"
          placeholder="Buscar marca..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="brands-grid">
        {filteredBrands.map((brand) => (
          <div
            key={brand.code}
            className={`brand-item ${selectedBrand === brand.code ? 'expanded' : ''}`}
            onClick={() => handleBrandClick(brand.code)}
            style={{ cursor: 'pointer' }}
          >
            <h3>{brand.name}</h3>
            <ul>
              {filteredModels
                .filter((model) => model.brand_code === brand.code)
                .map((model) => (
                  <li key={model.id}>{model.name}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

Cars.propTypes = {
  carBrands: PropTypes.array.isRequired,
  carModels: PropTypes.array.isRequired,
};

export default Cars;
