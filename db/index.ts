import { v4 as uuidv4 } from "uuid";

export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
  imageAlt: string;
};

export type Services = {
  id: string;
  name: string;
  description: string;
  rate: number;
  imageUrl: string;
  imageAlt: string;
};

export type DB = {
  products: Product[];
  services: Services[];
};

export const db: DB = {
  products: [
    {
      category: "Accessories",
      description:
        "Elevate your ensemble and make a statement of sophistication with the Horizon Chrono Series – where timeless elegance meets unparalleled performance.",
      id: uuidv4(),
      imageAlt: "Horizon Chrono Series",
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Horizon Chrono Series",
      price: 149.99,
    },
    {
      category: "Electronics",
      description:
        "Relive the joy of instant photography and make every moment count with the Snapshot Joy Polaroid Camera – where memories are made in an instant.",
      id: uuidv4(),
      imageAlt: "Polaroid Camera",
      imageUrl:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Polaroid Camera",
      price: 129.99,
    },
    {
      category: "Clothing",
      description:
        "Unleash your potential and set the pace with Nike RunStride – where innovation meets inspiration on the open road.",
      id: uuidv4(),
      imageAlt: "Nike RunStride",
      imageUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Nike RunStride",
      price: 79.99,
    },
    {
      category: "Electronics",
      description:
        "Elevate your auditory experience and indulge in pure audio bliss with SonicWave Pro headphones – where every sound comes to life in stunning clarity and detail.",
      id: uuidv4(),
      imageAlt: "Pink headphones",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "SonicWave Pro",
      price: 99.99,
    },
  ],
  services: [],
};
