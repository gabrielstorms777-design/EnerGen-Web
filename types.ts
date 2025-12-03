export type ProductCategory = 'HOGAR' | 'COMERCIO' | 'INDUSTRIA';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  power: string; // e.g., "5 kVA"
  description: string;
  images: string[]; // Changed from single imageUrl to array
  features: string[];
}

export interface Machine {
  id: string;
  name: string;
  type: 'AGRÍCOLA' | 'VIAL' | 'LOGÍSTICA';
  description: string;
  imageUrl: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}