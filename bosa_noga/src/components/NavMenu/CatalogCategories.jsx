import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesRequest } from '../../redux/reducers/categoriesSlice';
import Error from '../Error/Error';

function CatalogCategories({ onCategoryChange }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const loading = useSelector((state) => state.categories.isLoading);
  const error = useSelector((state) => state.categories.error);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    dispatch(fetchCategoriesRequest());
  }, [dispatch]);

  useEffect(() => {
    // Устанавливаем "Все" как активную категорию по умолчанию
    if (categories.length > 0 && activeCategory === null) {
      setActiveCategory('all');
      onCategoryChange('all');
    }
  }, [categories, activeCategory, onCategoryChange]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  const handleRetry = () => {
    dispatch(fetchCategoriesRequest());
  };

  const categoryList = [{ id: 'all', title: 'Все' }, ...categories];

  return (
    <>
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
        <ul className="catalog-categories nav justify-content-center">
          {categoryList.map((category) => (
            <li key={category.id} className="nav-item">
              <button
                className={`nav-link ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default CatalogCategories;