import Slider from "design-system/components/Slider";
import { Module } from "../utils/types";

export type SliderModuleProps = {
  module: Module;
};

export default function SliderModule({ module }: SliderModuleProps) {
  if (!module.slider?.banners) return null;

  return <Slider banners={module.slider.banners} />;
}
