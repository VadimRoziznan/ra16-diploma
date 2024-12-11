import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogItemsRequest } from '../../redux/actions/catalogItem';
import Error from '../Error/Error';
import ProductCard from '../ProductCard/ProductCard';

function CatalogItems({ activeCategory, searchQuery }) {
  const dispatch = useDispatch();
  const {
    catalogItems, isLoading, error, hasMore,
  } = useSelector((state) => state.catalogItems);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Сбрасываем offset при смене категории или строки поиска и загружаем новые данные
    setOffset(0);
    dispatch(
      fetchCatalogItemsRequest(
        activeCategory === 'all' ? null : activeCategory,
        0,
        searchQuery,
      ),
    );
  }, [dispatch, activeCategory, searchQuery]);

  const handleLoadMore = () => {
    // Увеличиваем offset и загружаем дополнительные данные
    const newOffset = offset + 6;
    setOffset(newOffset);
    dispatch(
      fetchCatalogItemsRequest(
        activeCategory === 'all' ? null : activeCategory,
        newOffset,
        searchQuery,
      ),
    );
  };

  return (
    <section className="top-sales">
      {isLoading && offset === 0 && (
        <div className="preloader">
          <span />
          <span />
          <span />
          <span />
        </div>
      )}
      {error ? (
        <Error message={error.message} onRetry={() => handleLoadMore()} />
      ) : (
        <div className="row">
          {catalogItems.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
      {isLoading && offset > 0 && (
        <div className="preloader" style={{ margin: '20px auto', textAlign: 'center' }}>
          <span />
          <span />
          <span />
          <span />
        </div>
      )}
      {hasMore && !isLoading && (
        <div className="text-center">
          <button
            className="btn btn-outline-primary"
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            Загрузить ещё
          </button>
        </div>
      )}
    </section>
  );
}

export default CatalogItems;