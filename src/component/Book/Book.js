import React from "react";

const Book = (props) => {
  const { title, image, price, subtitle } = props.book;
  return (
    <>
      <div className="col-lg-4">
        <div className="card h-100">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{subtitle}</p>
            <h3>{price}</h3>
          </div>
          <button
            onClick={() => props.addToCart(props.book)}
            className="btn btn-warning btn-sm p-2"
          >
            <b>Add to Cart</b>
          </button>
        </div>
      </div>
    </>
  );
};

export default Book;
