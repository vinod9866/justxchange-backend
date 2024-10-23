export interface ICategory {
    id?: string;
    categoryName: string;
}

export interface ICategoryRes {
    id: string;
    categoryName: string;
    createdDate: Date;
    updatedDate: Date;
    createdBy: number;
    updatedBy: number;
}
