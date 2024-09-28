import React, { useState } from 'react';
import '../Styles/Services-items.css';
import { categories, products } from './ServiceData';

function ServiceItems() {
  const initialSelectedCategoryId = categories[0]?.id; 
  const [selectedCategory, setSelectedCategory] = useState(initialSelectedCategoryId);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // const getHeaderText = () => {
  //   if (selectedCategory) {
  //     const category = categories.find((cat) => cat.id === selectedCategory);
  //     return `${category.name}`;
  //   }
  //   return 'All Products';
  // };

  return (
    <div className='container'>
      <div className="products-container mt-5">
        <div className="categories-container">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`category-card1 ${selectedCategory === category.id ? 'selected' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <h4 className="category-name1">{category.name}</h4>
            </div>
          ))}
        </div>
        <div className="products-grid mt-5">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card1">
              <img
                src={product.images}  // Accessing the first image in the array
                alt={product.name}
                className="product-image"
              />
              <h4 className='text-center mt-3'>{product.name}</h4>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceItems;
