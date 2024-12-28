import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart } from '../../redux/reducers/cartSlice';
import { fetchOrderRequest } from '../../redux/reducers/orderSlice';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

function Order() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce((sum, item) => sum + item.count * item.price, 0);

  const handleRemove = (id, size) => {
    dispatch(removeProductFromCart({ id, size }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const order = {
      items: cart.map(({ id, price, count }) => ({ id, price, count })),
      owner: {
        phone: event.target.phone.value,
        address: event.target.address.value,
      },
    };
    console.log("order", order);
    dispatch(fetchOrderRequest(order));
  };

  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            <section className="cart">
              <h2 className="text-center">Корзина</h2>
              {cart.length > 0 ? (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Название</th>
                      <th scope="col">Размер</th>
                      <th scope="col">Кол-во</th>
                      <th scope="col">Стоимость</th>
                      <th scope="col">Итого</th>
                      <th scope="col">Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product, index) => (
                      <tr key={`${product.id}-${product.size}`}>
                        <td>{index + 1}</td>
                        <td>
                          <a href={`/products/${product.id}`}>{product.title}</a>
                        </td>
                        <td>{product.size}</td>
                        <td>{product.count}</td>
                        <td>
                          {product.price}
                          {' '}
                          руб.
                        </td>
                        <td>
                          {product.price * product.count}
                          {' '}
                          руб.
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => handleRemove(product.id, product.size)}
                          >
                            Удалить
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="5" className="text-right">
                        Общая стоимость:
                      </td>
                      <td>
                        {totalAmount}
                        {' '}
                        руб.
                      </td>
                    </tr>
                  </tfoot>
                </table>
              ) : (
                <p className="text-center">Ваша корзина пуста</p>
              )}
            </section>
            {cart.length > 0 && (
              <section className="order">
                <h2 className="text-center">Оформить заказ</h2>
                <div
                  className="card"
                  style={{ maxWidth: '30rem', margin: '0 auto' }}
                >
                  <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="phone">Телефон</label>
                      <input
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Ваш телефон"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Адрес доставки</label>
                      <input
                        className="form-control"
                        id="address"
                        name="address"
                        placeholder="Адрес доставки"
                        required
                      />
                    </div>
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="agreement"
                        required
                      />
                      <label className="form-check-label" htmlFor="agreement">
                        Согласен с правилами доставки
                      </label>
                    </div>
                    <button type="submit" className="btn btn-outline-secondary">
                      Оформить
                    </button>
                  </form>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Order;
