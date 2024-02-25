import React from "react";
import { Product } from "../db/index";
import { Carousel } from "./Carousel";
import { CarouselItem } from "./ui/carousel";
import Image from "next/image";
import { H2 } from "./H2";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="flex flex-col w-full bg-card ">
      <div className="container">
        <div className="p-8 flex justify-normal items-center w-full">
          <H2 label="Featured Products" />
        </div>
        <div>
          <Carousel
            carouselProps={{ orientation: "horizontal" }}
            carouselContentProps={{
              className: "gap-8 flex items-center w-full h-full p-4",
              children: (
                <>
                  {products.map((prod) => (
                    <FeaturedProductCard product={prod} key={prod.id} />
                  ))}
                </>
              ),
            }}
          />
        </div>
      </div>
    </section>
  );
}

interface FeaturedProductCardProps {
  product: Product;
}

function FeaturedProductCard({ product }: FeaturedProductCardProps) {
  return (
    <CarouselItem className="max-w-96 shadow-md relative h-[500px] pl-0 hover:brightness-110 duration-300  hover:scale-105 hover:shadow-slate-50">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-3/5">
          <Image
            src={product.imageUrl}
            alt={product.imageAlt}
            className="w-full h-full object-cover"
            width={360}
            height={200}
          />
          <Badge className="absolute bottom-2 right-2">
            {product.category}
          </Badge>
        </div>
        <div className="p-4 h-2/5">
          <h3 className="text-foreground font-bold">{product.name}</h3>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="absolute border bottom-2 right-2 rounded-sm h-6 flex">
            <Button
              className="h-full rounded-r-none"
              size={"sm"}
              variant={"ghost"}
            >
              + Add to cart
            </Button>
            <Badge variant={"secondary"} className="h-full rounded-l-none">
              £{product.price}
            </Badge>
          </div>
        </div>
      </Link>
    </CarouselItem>
  );
}
