export const FETCH_CATALOG_ITEMS_REQUEST = 'FETCH_CATALOG_ITEMS_REQUEST';
export const FETCH_CATALOG_ITEMS_SUCCESS = 'FETCH_CATALOG_ITEMS_SUCCESS';
export const FETCH_CATALOG_ITEMS_FAILURE = 'FETCH_CATALOG_ITEMS_FAILURE';
export const FETCH_CATALOG_ITEMS_FAILURE_REQUEST = 'FETCH_CATALOG_ITEMS_FAILURE_REQUEST';

export const fetchCatalogItemsRequest = (categoryId = null, offset = 0, searchQuery = '') => ({
  type: FETCH_CATALOG_ITEMS_REQUEST,
  categoryId,
  offset,
  searchQuery,
});

export const fetchCatalogItemsSuccess = (catalogItems, isLoadMore) => ({
  type: FETCH_CATALOG_ITEMS_SUCCESS,
  catalogItems,
  isLoadMore, // Указывает, что данные добавляются, а не перезаписываются
});

export const fetchCatalogItemsFailure = (error) => ({
  type: FETCH_CATALOG_ITEMS_FAILURE,
  error,
});

export const fetchCatalogItemsDetailsRequest = (id) => ({
  type: FETCH_CATALOG_ITEMS_FAILURE_REQUEST,
  id,
});
