import React from "react";

const Cartcomponent = (props) => {
  const { cart } = props;
  let totalQuantity = 0;
  let total = 0.0;
  for (const book of cart) {
    let newPrice = parseFloat(book.price.split("$")[1]);
    book.quantity = !book.quantity ? 1 : book.quantity;
    total = total + newPrice * book.quantity;
    totalQuantity = totalQuantity + book.quantity;
  }
  return (
    <div>
      <div className="card cart">
        <div className="card-body">
          <h4>Total Book : {totalQuantity}</h4>
          <h4>Total Price : {total}</h4>
          <button className="btn btn-primary">Empty Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cartcomponent;
