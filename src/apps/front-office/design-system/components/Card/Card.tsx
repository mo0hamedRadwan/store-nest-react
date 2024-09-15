import React from "react";

export type CardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

function _Card({ image, title, description, link }: CardProps) {
  return (
    <>
      <div className="w-full card text-center border border-gray-200 p-9 py-14 rounded-lg hover:shadow-lg transition-all cursor-pointer">
        <div className="card-image">
          <img
            src={image}
            className="w-24 object-cover aspect-square mx-auto"
          />
        </div>
        <div className="card-title my-8">
          <h4 className="text-2xl font-bold">{title}</h4>
        </div>
        <div className="card-description text-muted-foreground my-8 line-clamp-3">
          <p>{description}</p>
        </div>
        <div className="card-link">
          <a href={link} className="text-primary font-semibold">
            Read more
          </a>
        </div>
      </div>
    </>
  );
}

const Card = React.memo(_Card);
export default Card;
