export interface Product {
    user: string;
    id: number | null;
    productName: string;
    productCode: string;
    proddescription?: string;
    prodRating?: number;
}