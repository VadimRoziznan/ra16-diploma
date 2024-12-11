import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import ProductDetails from '../../components/ProductDetails/ProductDetails';

function Product() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            <ProductDetails />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Product;
