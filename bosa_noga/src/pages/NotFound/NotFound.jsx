import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

function NotFound() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            <section className="top-sales">
              <h2 className="text-center">Страница не найдена</h2>
              <p>
                Извините, такая страница не найдена!
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
