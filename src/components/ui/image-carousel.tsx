"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageCarouselProps {
  images: string[];
  heightClass?: string;
  roundedClass?: string;
}

export function ImageCarousel({
  images,
  heightClass = "h-64",
  roundedClass = "rounded-xl",
}: ImageCarouselProps) {
  return (
    <div className={`relative ${roundedClass}`}>
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((src, idx) => (
            <CarouselItem key={idx} className="basis-full">
              <div className={`relative w-full ${heightClass} overflow-hidden`}>
                <Image
                  src={src}
                  alt={`slide-${idx}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  unoptimized
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
}
