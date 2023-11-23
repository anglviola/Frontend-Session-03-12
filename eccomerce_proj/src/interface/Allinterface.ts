export interface UiProductList {
  id: number | string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface UiAddCartStateMain {
  date: string;
  quantity: number;
  item: UiProductList;
}
export interface CheckoutSuccessResponse {
  url: string;
}
export const productsUpdate = [
  { id: "price_1OFDmoFC4Fm3kHXvKJOy1fCu", title: "Fjallraven" },
  { id: "price_1OFFF5FC4Fm3kHXvEbk2grFv", title: "Premium Slim Fit T-Shirts" },
  { id: "price_1OFFGSFC4Fm3kHXv3EjdGIhN", title: "Mens Cotton Jacket" },
  { id: "price_1OFFb3FC4Fm3kHXvOCIzi630", title: "Mens Casual Slim Fit" },
  {
    id: "price_1OFFc8FC4Fm3kHXvpLdFHRJr",
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  },
  {
    id: "price_1OFFeaFC4Fm3kHXvSrzE7LDO",
    title: "Solid Gold Petite Micropave",
  },
];
