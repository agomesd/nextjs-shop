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
    {
      category: "Clothing",
      description:
        "Experience the perfect blend of style, comfort, and craftsmanship with our range of dress shoes.",
      id: uuidv4(),
      imageAlt: "Turqoise dress shoes on peaches",
      imageUrl:
        "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Dress shoes",
      price: 89.99,
    },
  ],
  services: [
    {
      id: uuidv4(),
      name: "Consulting",
      description: "We provide consulting solutions for all your needs.",
      imageUrl:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VydmljZXN8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Two hands pointing at a computer screen",
    },
    {
      id: uuidv4(),
      name: "Design",
      description: "We provide design solutions for all your needs.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1677695598264-6d88f8ee31f0?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt:
        "Pair of scisors and some thred on a table next to a sewing machine",
    },
    {
      id: uuidv4(),
      name: "Networking",
      description: "We provide networking solutions for all your needs.",
      imageUrl:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt:
        "A group of peaople sat around a table working on their computers",
    },
    {
      id: uuidv4(),
      name: "Staffing",
      description: "We provide staffing solutions for all your needs.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661758946219-dcf3e31e557d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VydmljZXN8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Barista serving a coffee ",
    },
    {
      id: uuidv4(),
      name: "Training",
      description: "We provide training solutions for all your needs.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1663013550257-706caefd470a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNlcnZpY2VzfGVufDB8fDB8fHww",
      imageAlt: "Two mechanics consulting a computer",
    },
  ],
};
