import React, { createContext, useEffect, useState } from 'react'

const ProductsContext = createContext();

const ProductProvider = ({children}) => {

    const [getProducts, setGetProducts] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then ((response) => {
              if (!response.ok) {
                throw new Error ('Network response was not ok');
              }
              return response.json();
            })
            .then((data) => setGetProducts(data));
    }, []);

  return (
    <ProductsContext.Provider value={getProducts}>
        {children}
    </ProductsContext.Provider>
  );
};

export {ProductsContext, ProductProvider};