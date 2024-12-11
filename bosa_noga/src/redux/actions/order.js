export const FETCH_ORDER_REQUEST = 'FETCH_ORDER_REQUEST';
export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS';
export const FETCH_ORDER_FAILURE = 'FETCH_ORDER_FAILURE';

export const fetchOrderRequest = (order) => ({
  type: FETCH_ORDER_REQUEST,
  order,
});

export const fetchOrderSuccess = (response) => ({
  type: FETCH_ORDER_SUCCESS,
  response,
});

export const fetchOrderFailure = (error) => ({
  type: FETCH_ORDER_FAILURE,
  error,
});
