// EXPORTS: IProduct, ProductCategory

export type ProductCategory = 'villa-elevator' | 'cargo-lift' | 'scissor-lift' | 'wheelchair-lift';

export interface IProduct {
  id: string;
  category: ProductCategory;
  name: string;
  description: string;
  features: string[];
  image: string;
}
