import React from 'react';

function ProductCard({ product }) {
  const {
    id, title, price, images,
  } = product;

  return (
    <div className="col-4">
      <div className="card catalog-item-card">
        <img
          className="card-img-top img-fluid"
          src={images[0]}
          alt={title}
        />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{price}</p>
          <a href={`/products/${id}`} className="btn btn-outline-primary">Заказать</a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;