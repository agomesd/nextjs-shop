import React from "react";
import {
  Carousel as CarouselCN,
  CarouselPropsCN,
  CarouselContent,
  CarouselContentProps,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

interface CarouselProps {
  carouselProps?: CarouselPropsCN;
  carouselContentProps?: CarouselContentProps;
  carouselPreviousProps?: React.ComponentProps<typeof CarouselPrevious>;
  carouselNextProps?: React.ComponentProps<typeof CarouselNext>;
}

export function Carousel({
  carouselProps,
  carouselContentProps,
  carouselNextProps,
  carouselPreviousProps,
}: CarouselProps) {
  return (
    <CarouselCN {...carouselProps}>
      <CarouselContent {...carouselContentProps}>
        {carouselContentProps?.children}
      </CarouselContent>
      <CarouselPrevious {...carouselPreviousProps} />
      <CarouselNext {...carouselNextProps} />
    </CarouselCN>
  );
}
