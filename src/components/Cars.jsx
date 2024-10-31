import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Typography, TextField, Grid, Box, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { create } from 'zustand';

const useCarsStore = create((set) => ({
  carBrands: [],
  carModels: [],
  selectedBrand: null,
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedBrand: (brandCode) => set({ selectedBrand: brandCode }),
  setCarBrands: (brands) => set({ carBrands: brands }),
  setCarModels: (models) => set({ carModels: models }),
}));

const Cars = ({ carBrands: initialCarBrands, carModels: initialCarModels }) => {
  const { carBrands, carModels, selectedBrand, searchQuery, setSearchQuery, setSelectedBrand } = useCarsStore();

  useEffect(() => {
    useCarsStore.setState({ carBrands: initialCarBrands, carModels: initialCarModels });
  }, [initialCarBrands, initialCarModels]);

  const handleBrandClick = (brandCode) => {
    setSelectedBrand(selectedBrand === brandCode ? null : brandCode);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBrands = carBrands.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const brandToModels = {};
  carModels.forEach((model) => {
    const brandCode = model.brand_code;
    if (!brandToModels[brandCode]) {
      brandToModels[brandCode] = [];
    }
    brandToModels[brandCode].push(model);
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Modelos de Autos
      </Typography>
      <TextField
        variant="filled"
        color="black"
        label="Buscar marca..."
        fullWidth
        sx={{ mb: 4 }}
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
        {filteredBrands.map((brand, index) => {
          console.log('Brand Map:', brand, index);
          return (
            <Grid item xs={12} sm={6} md={4} key={brand.code}>
              <Box
                sx={{
                  backgroundColor: 'white',
                  padding: '10px',
                  borderRadius: '5px',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                  marginBottom: '20px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                  width: '90%',
                  height: 'fit-content',
                }}
              >
                <Box onClick={() => handleBrandClick(brand.code)} display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6">{brand.name}</Typography>
                  <IconButton size="small">
                    <ExpandMoreIcon />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    maxHeight: selectedBrand === brand.code ? '200px' : 0,
                    overflow: 'auto',
                    transition: 'max-height 0.3s ease',
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    borderRadius: '5px',
                    position: 'absolute',
                    top: '90%',
                    left: 0,
                    right: 0,
                    width: '100%',
                    zIndex: 1,
                  }}
                >
                  {brandToModels[brand.code]?.map((model, index) => {
                    console.log('Model Map:', model, index);
                    return (
                      <Typography key={model.id} variant="body2" sx={{ backgroundColor: 'white', padding: '5px', margin: '5px 0', display: 'block' }}>{model.name}</Typography>
                    );
                  })}
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

Cars.propTypes = {
  carBrands: PropTypes.array.isRequired,
  carModels: PropTypes.array.isRequired,
};

export default Cars;
