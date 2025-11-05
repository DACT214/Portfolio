import React, { useEffect, useState } from "react";

const ProductLIst = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products in ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return <div>ProductLIst</div>;
};

export default ProductLIst;
