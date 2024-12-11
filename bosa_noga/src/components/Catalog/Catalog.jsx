import React, { useState } from 'react';
import CatalogCategories from '../NavMenu/CatalogCategories';
import CatalogItems from '../CatalogItems/CatalogItems';

function Catalog({ searchQuery }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <CatalogCategories onCategoryChange={handleCategoryChange} />
      <CatalogItems activeCategory={activeCategory} searchQuery={searchQuery} />
    </>
  );
}

export default Catalog;
