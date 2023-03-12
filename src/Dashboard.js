import React, { useState, useEffect } from "react";

function Dashboard() {
//typical http get adapted from stack overflow
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
   
      const response = await fetch("https://fakestoreapi.com/products");

      if (response.ok) {
   
        const data = await response.json();

  
        setProducts(data);
      } else {
  
        throw new Error("Something went wrong");
      }
    } catch (error) {

      console.error(error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="container">
      <h1>Dashboard Page</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;