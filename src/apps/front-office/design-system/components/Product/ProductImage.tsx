const ProductImage = () => {
  return (
    <div className="product-image relative group">
      <img
        className="w-fit opacity-100 group-hover:opacity-0 group-hover:invisible transition-opacity"
        src="public/images/daily-best-products/product-1-1.jpg"
      />
      <img
        className="w-fit absolute top-0 left-0 invisible opacity-0 group-hover:opacity-100 group-hover:visible"
        src="public/images/daily-best-products/product-1-2.jpg"
      />
    </div>
  );
};

export default ProductImage;
