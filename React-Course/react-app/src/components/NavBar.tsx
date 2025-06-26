import React from "react";

interface Props {
  cartItmesCount: number;
}

const NavBar = ({ cartItmesCount }: Props) => {
  return <div>NavBar: {cartItmesCount}</div>;
};

export default NavBar;
