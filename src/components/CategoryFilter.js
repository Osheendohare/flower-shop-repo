// components/CategoryFilter.js
import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-filter">
      <button onClick={() => onSelectCategory(null)}>All</button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          style={{
            backgroundColor: selectedCategory === cat ? '#8e44ad' : '#eee',
            color: selectedCategory === cat ? 'white' : 'black',
            margin: '0.5rem'
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
