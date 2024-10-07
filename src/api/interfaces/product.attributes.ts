export interface ProductAttributes {
    productId?: number;
    productName: string;
    description: string;
    amount: number;
    categoryId: number;
    userId: number;
    images?: string[];
    condition: string;
}
  