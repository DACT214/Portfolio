import React from "react";

interface Props {
  cartItem: string[];
  onClear: () => void;
}

const cart = ({ cartItem, onClear }: Props) => {
  return (
    <>
      <div>cart</div>
      <ul>
        {cartItem.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default cart;
