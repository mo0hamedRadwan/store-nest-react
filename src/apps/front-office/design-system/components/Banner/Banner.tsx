import React from "react";

export type BannerProps = {
  imageUrl: string;
  title: string;
  Subtitle: React.FC;
};

function _Banner({ imageUrl, title, Subtitle }: BannerProps) {
  return (
    <div className={`w-full relative`}>
      <img src={imageUrl} className="w-full" />
      <div className="absolute-center">
        <h1 className="font-bold text-xs text-muted-foreground">{title}</h1>
        <p className="text-xl font-bold hover:-translate-y-2 transition-all ease-in-out">
          {<Subtitle />}
        </p>
      </div>
    </div>
  );
}

const Banner = React.memo(_Banner);
export default Banner;
