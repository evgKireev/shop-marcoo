export type productsType = {
    id: number;
    images: string[];
    newPrice: string;
    oldPrice: string;
    desc: string;
    like: number;
    title: string;
  };
  
  export type Data = productsType[];