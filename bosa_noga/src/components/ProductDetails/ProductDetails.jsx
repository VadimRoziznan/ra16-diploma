import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetailsRequest } from '../../redux/actions/productDetails';
import { addProductToCart } from '../../redux/actions/cart';

function ProductDetails() {
  const { id } = useParams(); // Получение id из URL
  const dispatch = useDispatch();
  const { product, isLoading, error } = useSelector((state) => state.productDetails);

  const [selectedSize, setSelectedSize] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    dispatch(fetchProductDetailsRequest(id));
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className="preloader">
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        Ошибка загрузки:
        {error.message}
      </div>
    );
  }
  if (!product) return null;

  return (
    <div className="catalog-item">
      <h2 className="text-center">{product.title}</h2>
      <div className="row">
        <div className="col-5">
          <img src={product.images[0]} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-7">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{product.sku || '-'}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{product.manufacturer || '-'}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{product.color || '-'}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{product.material || '-'}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{product.season || '-'}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{product.reason || '-'}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <p>
              Размеры:
              {' '}
              {product.sizes.map((size) => (
                <span
                  key={size.size}
                  className={`catalog-item-size ${selectedSize === size.size ? 'selected' : ''} ${size.available ? '' : 'disabled'}`}
                  onClick={() => size.available && setSelectedSize(size.size)}
                  style={{ cursor: size.available ? 'pointer' : 'not-allowed', color: size.available ? 'black' : 'grey' }}
                >
                  {size.size}
                </span>
              ))}
            </p>
            <p>
              Количество:
              <span className="btn-group btn-group-sm pl-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => setCount(Math.max(1, count - 1))}
                  disabled={count === 1}
                >
                  -
                </button>
                <span className="btn btn-outline-primary">{count}</span>
                <button
                  className="btn btn-secondary"
                  onClick={() => setCount(Math.min(10, count + 1))}
                  disabled={count === 10}
                >
                  +
                </button>
              </span>
            </p>
            <button
              className="btn btn-danger btn-block btn-lg"
              onClick={() => dispatch(
                addProductToCart({
                  id: product.id,
                  size: selectedSize,
                  count,
                  price: product.price,
                  title: product.title,
                }),
              )}
              disabled={!selectedSize}
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
