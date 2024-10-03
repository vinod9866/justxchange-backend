export interface ProductAttributes {
    id?: number;
    productName: string;
    amount: number;
    categoryId: number;
    userId: number;
    images?: string[];
    condition: string;
}
  