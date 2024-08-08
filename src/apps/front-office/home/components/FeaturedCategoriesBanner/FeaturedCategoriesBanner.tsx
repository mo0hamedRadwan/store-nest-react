const FeaturedCategoriesBanner = () => {
  const cards = [
    {
      backgroundImage: "/images/featured-categories/banner-1.png",
      title: "Everyday Fresh & Clean with Our Products",
    },
    {
      backgroundImage: "/images/featured-categories/banner-2.png",
      title: "Make your Breakfast Healthy and Easy",
    },
    {
      backgroundImage: "/images/featured-categories/banner-3.png",
      title: "The best Organic Products Online",
    },
  ];

  return (
    <div className="featured-categories-banners flex justify-center">
      {cards.map((card, index) => (
        <div
          className="relative h-[65vh] max-h-[35vh] rounded-lg shadow-md p-6 m-4 w-full sm:w-1/2 lg:w-1/3"
          style={{
            background: `url(${card.backgroundImage}) no-repeat center center / cover`,
          }}
          key={index}>
          {/* <div className="absolute z-[2] top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2 py-0">
                     <h4 className="font-bold min-h-[100px] mb-[15px]" style={{ whiteSpace: 'pre-line' }}>
                         {card.title}
                     </h4>
                     <Button className="bg-primary-default hover:bg-primary-dark font-custom leading-[1.3] pl-3 pr-2 py-[7px] text-sm h-9">
                         shop now
                     </Button>
                 </div> */}
        </div>
      ))}
    </div>
  );
};

export default FeaturedCategoriesBanner;
