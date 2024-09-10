import { Image } from "apps/front-office/utils/types";
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

export type ProductLightBoxProps = {
  images: Image[];
};

export default function ProductLightBox({ images }: ProductLightBoxProps) {
  const [open, setOpen] = React.useState(false);
  const fullscreenRef = React.useRef(null);
  const slideshowRef = React.useRef(null);

  return (
    <>
      <button
        className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 text-primary text-2xl rounded-lg shadow-md  transition-all duration-500 ease-in-out"
        onClick={() => setOpen(true)}>
        <i className="bx bx-expand text-primary-default"></i>
      </button>
      <Lightbox
        slides={images?.map(img => ({ src: img.url }))}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        open={open}
        plugins={[Download, Fullscreen, Slideshow]}
        close={() => setOpen(false)}
        fullscreen={{ ref: fullscreenRef }}
        slideshow={{ ref: slideshowRef }}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
}
