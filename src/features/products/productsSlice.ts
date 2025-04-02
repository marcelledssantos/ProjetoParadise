import { createSlice } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: [
    { id: 1, name: 'Samambaia', price: 25, image: '/plant1.png', category: 'Sombra' },
    { id: 2, name: 'Suculenta', price: 15, image: '/plant2.png', category: 'Sol' },
    { id: 3, name: 'Espada de São Jorge', price: 30, image: '/plant3.png', category: 'Proteção' },
    { id: 4, name: 'Orquídea', price: 50, image: '/plant4.png', category: 'Sol' },
    { id: 5, name: 'Cacto', price: 20, image: '/plant5.png', category: 'Sol' },
    { id: 6, name: 'Jiboia', price: 22, image: '/plant6.png', category: 'Sombra' }
  ]
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
});

export default productsSlice.reducer;