import { useState, useEffect } from "react";
import axios from "axios";

export default function useProducts() {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const products = await axios.get(
        "https://vertskater.github.io/json-files/products.json" /* "https://fakestoreapi.com/products" */
      );
      bestSellingData(products);
      setAllProducts(products.data);
    }
    fetchData();
  }, []);
  const bestSellingData = (products) => {
    const bestSellingItems = products.data.filter((product) => {
      return product.rating.rate > 4.6;
    });
    setBestSellingProducts(bestSellingItems);
  };

  return [bestSellingProducts, allProducts];
}
