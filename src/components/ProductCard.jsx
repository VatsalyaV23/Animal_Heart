import React from 'react';

const ProductCard = ({ image, category, title, price, onAddToCart, badge }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-[0_12px_24px_-10px_rgba(30,58,138,0.1)] hover:-translate-y-1 transition-all duration-300">
      {/* Product Image */}
      <div className="aspect-square bg-slate-100 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {badge && (
          <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">
            {badge}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <p className="text-[12px] font-bold text-tertiary uppercase tracking-wider mb-1">
          {category}
        </p>
        <h3 className="font-h3 text-body-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Price & Add to Cart */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-secondary">${price}</span>
          <button
            onClick={onAddToCart}
            className="h-10 w-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-surface-tint transition-colors shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;