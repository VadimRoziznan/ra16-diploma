import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Home from './pages/Home/Home';
import ProductCatalog from './pages/ProductCatalog/ProductCatalog';
import AboutStore from './pages/AboutStore/AboutStore';
import Contacts from './pages/Contacts/Contacts';
import NotFound from './pages/NotFound/NotFound';
import Produc from './pages/Product/Product';
import Order from './pages/Order/Order';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div>
            <div className="page">
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/api/items" element={<ProductCatalog />} />
                <Route path="/about" element={<AboutStore />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/products/:id" element={<Produc />} />
                <Route path="/order" element={<Order />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;