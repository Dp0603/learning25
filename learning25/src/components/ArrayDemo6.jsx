import React from "react";
import apple from "../assets/apple.png";
import levis from "../assets/levis.png";
import playstation from "../assets/playstation.png";

const ProductTable = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Max",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
      price: 120,
      discount: 30,
      category: "Fashion",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      price: 800,
      discount: 10,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Apple MacBook Pro",
      logo: apple,
      price: 1500,
      discount: 15,
      category: "Electronics",
    },
    {
      id: 4,
      name: "Levi's Jeans",
      logo: levis,
      price: 60,
      discount: 50,
      category: "Fashion",
    },
    {
      id: 5,
      name: "PlayStation 5",
      logo: playstation,
      price: 500,
      discount: 25,
      category: "Electronics",
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product Table</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Company Logo</th>
            <th>Product Name</th>
            <th>Price ($)</th>
            <th>Original Price ($)</th>
            <th>Discount (%)</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const originalPrice = product.price / (1 - product.discount / 100);
            return (
              <tr key={product.id} style={{ height: "70px" }}>
                <td>{product.id}</td>
                <td>
                  <img
                    src={product.logo}
                    alt={product.name}
                    style={{ width: "50px", borderRadius: "8px" }}
                  />
                </td>
                <td
                  style={{
                    color: product.discount >= 50 ? "green" : "white",
                  }}
                >
                  {product.name}
                </td>
                <td>${product.price.toFixed(2)}</td>
                <td>${originalPrice.toFixed(2)}</td>
                <td>{product.discount}%</td>
                <td
                  style={{
                    backgroundColor: product.category === "Fashion" ? "red" : "black",
                  }}
                >
                  {product.category}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
