import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Banner  from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Catalog from '../../components/Catalog/Catalog';
import Search from '../../components/Search/Search';

function ProductCatalog() {
  const [searchParams] = useSearchParams();
  const initialSearchQuery = searchParams.get('search') || '';
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

  const handleSearch = (query) => {
    setSearchQuery(query); // Обновляем состояние поиска
  };

  useEffect(() => {
    setSearchQuery(initialSearchQuery);
  }, [initialSearchQuery]);

  return (
    <>
      <Header />
        <main className="container">
          <div className="row">
            <div className="col">
              <Banner />
              <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                <Search onSearch={handleSearch} initialQuery={searchQuery} />
                <section className="catalog">
                  <Catalog searchQuery={searchQuery} />
                </section>
              </section>
            </div>
          </div>
        </main>
      <Footer />
    </>
  );
}

export default ProductCatalog;
