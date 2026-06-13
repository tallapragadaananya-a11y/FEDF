import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import products from "../data/product";
import { useState } from "react";
import "../styles/Products.css";

function Products() {
  const [search,setSearch] = useState("");

     products.filter(product =>
        product.name .toLowerCase().includes(
            search.toLowerCase()
              ))
  return (

    <>
      <Navbar />

      <div className="products-page">

        <h1>Explore Products</h1>

          <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e)=>
          setSearch(e.target.value)
          }
          />

        <select>
          <option>All</option>
          <option>Fashion</option>
          <option>Electronics</option>
          <option>Home</option>
        </select>

        <select>
         <option>All Websites</option>
         <option>Amazon</option>
         <option>Myntra</option>
         <option>Flipkart</option>
         <option>Littlebox</option>
        </select> 

        <div className="product-grid">

          {products.map(product => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>


      </div>
    </>
  );
}

export default Products;

