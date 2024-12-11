import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import TopSales from '../../components/TopSales/TopSales';
import Footer from '../../components/Footer/Footer';
import Catalog from '../../components/Catalog/Catalog';

function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            <TopSales />
            <section className="catalog">
              <h2 className="text-center">Каталог</h2>
              <Catalog />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
