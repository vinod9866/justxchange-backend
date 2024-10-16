export interface ICategory {
    categoryId?: number;
    categoryName: string;
}

export interface ICategoryRes {
    categoryId: number;
    categoryName: string;
    createdDate: Date;
    updatedDate: Date;
    createdBy: number;
    updatedBy: number;
}
