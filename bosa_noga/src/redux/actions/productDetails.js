export const FETCH_PRODUCT_DETAILS_REQUEST = 'FETCH_PRODUCT_DETAILS_REQUEST';
export const FETCH_PRODUCT_DETAILS_SUCCESS = 'FETCH_PRODUCT_DETAILS_SUCCESS';
export const FETCH_PRODUCT_DETAILS_FAILURE = 'FETCH_PRODUCT_DETAILS_FAILURE';

export const fetchProductDetailsRequest = (id) => ({
  type: FETCH_PRODUCT_DETAILS_REQUEST,
  id,
});

export const fetchProductDetailsSuccess = (product) => ({
  type: FETCH_PRODUCT_DETAILS_SUCCESS,
  product,
});

export const fetchProductDetailsFailure = (error) => ({
  type: FETCH_PRODUCT_DETAILS_FAILURE,
  error,
});
