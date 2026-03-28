export interface Product {
    _id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    images: string[];
    rating: number;
    numReviews: number;
    isFeatured: boolean;
    status: string;
    createdAt: string;
    updatedAt: string;
}