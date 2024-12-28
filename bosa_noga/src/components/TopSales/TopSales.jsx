import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest } from '../../redux/reducers/productsSlice';
import Error from '../Error/Error';
import ProductCard from '../ProductCard/ProductCard';

function TopSales() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.isLoading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(fetchProductsRequest());
  };

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {loading ? (
        <div className="preloader">
          <span />
          <span />
          <span />
          <span />
        </div>
      ) : error ? (
        <Error message={error.message} onRetry={handleRetry} />
      ) : (

        <div className="row">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>

      )}
    </section>
  );
}

export default TopSales;