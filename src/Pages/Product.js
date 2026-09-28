import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import "./Product.css"
function Product() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.noksha.dev/api/products")
      .then((res) => res.json())
      .then((json) => setProducts(json.data || json))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className='products-page'>
        <h2>Products</h2>
      <div className='product-container'>
        {
          products.map((item) => (

            <ProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}

            ></ProductCard>
          )
          )

        }

      </div>

    </div>
  )
}
export default Product;