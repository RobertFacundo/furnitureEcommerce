import diningImg from '../../assets/images/categories/dining.png';
import livingImg from '../../assets/images/categories/living.png';
import bedroomImg from '../../assets/images/categories/bedroom.png'

import dining1 from '../../assets/images/products/dining/dining1.jpg'
import dining2 from '../../assets/images/products/dining/dining1II.jpg'
import dining3 from '../../assets/images/products/dining/dining1III.jpg'
import dining4 from '../../assets/images/products/dining/dining1IV.jpg'

import diningChair1 from '../../assets/images/products/dining/dining2.jpg'
import diningChair2 from '../../assets/images/products/dining/dining2II.jpg'
import diningChair3 from '../../assets/images/products/dining/dining2III.jpg'
import diningChair4 from '../../assets/images/products/dining/dining2IV.jpg'

import diningGlassTable1 from '../../assets/images/products/dining/dining3.jpg'
import diningGlassTable2 from '../../assets/images/products/dining/dining3II.jpg'
import diningGlassTable3 from '../../assets/images/products/dining/dining3III.jpg'
import diningGlassTable4 from '../../assets/images/products/dining/dining3IV.jpg'

import living1 from '../../assets/images/products/living/living1.jpg'
import living2 from '../../assets/images/products/living/living1II.jpg'
import living3 from '../../assets/images/products/living/living1III.jpg'
import living4 from '../../assets/images/products/living/living1IV.jpg'

import livingCoffeeTable1 from '../../assets/images/products/living/living2.jpg'
import livingCoffeeTable2 from '../../assets/images/products/living/living2II.jpg'
import livingCoffeeTable3 from '../../assets/images/products/living/living2III.jpg'
import livingCoffeeTable4 from '../../assets/images/products/living/living2IV.jpg'

import livingTVStand1 from '../../assets/images/products/living/living3.jpg'
import livingTVStand2 from '../../assets/images/products/living/living3II.jpg'
import livingTVStand3 from '../../assets/images/products/living/living3III.jpg'
import livingTVStand4 from '../../assets/images/products/living/living3IV.jpg'

import bedroom1 from '../../assets/images/products/bedroom/bedroom1.jpg'
import bedroom2 from '../../assets/images/products/bedroom/bedroom1II.jpg'
import bedroom3 from '../../assets/images/products/bedroom/bedroom1III.jpg'
import bedroom4 from '../../assets/images/products/bedroom/bedroom1IV.jpg'

import bedroomSideTable1 from '../../assets/images/products/bedroom/bedroom2.jpg'
import bedroomSideTable2 from '../../assets/images/products/bedroom/bedroom2II.jpg'
import bedroomSideTable3 from '../../assets/images/products/bedroom/bedroom2III.jpg'
import bedroomSideTable4 from '../../assets/images/products/bedroom/bedroom2IV.jpg'

import bedroomSlidingWardrobe1 from '../../assets/images/products/bedroom/bedroom3.jpg'
import bedroomSlidingWardrobe2 from '../../assets/images/products/bedroom/bedroom3II.jpg'
import bedroomSlidingWardrobe3 from '../../assets/images/products/bedroom/bedroom3III.jpg'
import bedroomSlidingWardrobe4 from '../../assets/images/products/bedroom/bedroom3IV.jpg'

export type CategoryType = 'Dining' | 'Living' | 'Bedroom';

export type Category = {
    name: CategoryType;
    image: string;
}

export type Review = {
    user: string;
    rating: number;
    comment: string;
};

export type Product = {
    id: string;
    name: string;
    price: number;

    category: CategoryType;
    images: string[];

    shortDescription: string;
    description: string;

    colors?: string[];
    sizes: string[];

    tags: string[];

    rating: number;
    reviews?: Review[];

    additionalInfo?: {
        material?: string;
        dimensions?: string;
        warranty?: string;
    };

    discount?: number;
    isNew?: boolean;
}

export const categories: Category[] = [
    { name: 'Dining', image: diningImg },
    { name: 'Living', image: livingImg },
    { name: 'Bedroom', image: bedroomImg }
];

export const products: Product[] = [
    {
        id: 'dining-1',
        name: 'Modern Dining Table',
        price: 320,
        category: 'Dining',
        images: [
            dining1,
            dining2,
            dining3,
            dining4,
        ],
        shortDescription: 'Minimalist wooden dining table.',
        description: 'A beautifully crafted dining table made from solid wood, perfect for modern interiors.',
        colors: ['#8B5A2B', '#000000'],
        sizes: ['4 seats', '6 seats'],
        tags: ['table', 'wood', 'dining'],
        rating: 4.5,
        additionalInfo: {
            material: 'Oak Wood',
            dimensions: '140x80x75 cm',
            warranty: '2 years'
        },
        discount: 10,
        isNew: true
    },
    {
        id: 'dining-2',
        name: 'Classic Dining Chair',
        price: 120,
        category: 'Dining',
        images: [
            diningChair1,
            diningChair2,
            diningChair3,
            diningChair4,
        ],
        shortDescription: 'Comfortable and elegant dining chair.',
        description: 'A stylish dining chair with ergonomic design and premium materials.',
        colors: ['#ffffff', '#333333'],
        sizes: ['Standard'],
        tags: ['chair', 'dining'],
        rating: 4.2,
        additionalInfo: {
            material: 'Fabric & Wood',
            dimensions: '45x50x90 cm',
            warranty: '1 year'
        },
        isNew: false
    },
    {
        id: 'dining-3',
        name: 'Glass Dining Table',
        price: 450,
        category: 'Dining',
        images: [
            diningGlassTable1,
            diningGlassTable2,
            diningGlassTable3,
            diningGlassTable4,
        ],
        shortDescription: 'Elegant glass dining table.',
        description: 'A modern glass-top dining table that brings sophistication to any dining space.',
        colors: ['#000000'],
        sizes: ['6 seats'],
        tags: ['table', 'glass', 'modern', 'dining'],
        rating: 4.7,
        additionalInfo: {
            material: 'Tempered Glass & Steel',
            dimensions: '160x90x75 cm',
            warranty: '3 years'
        },
        discount: 15,
        isNew: true
    },
    {
        id: 'living-1',
        name: 'Comfortable Fabric Sofa',
        price: 550,
        category: 'Living',
        images: [
            living1,
            living2,
            living3,
            living4,
        ],
        shortDescription: 'Soft and modern fabric sofa.',
        description: 'A cozy fabric sofa designed for maximum comfort and modern aesthetics. Perfect for any living room.',
        colors: ['#808080', '#D2B48C', '#000000'],
        sizes: ['2 seater', '3 seater'],
        tags: ['sofa', 'living', 'comfort'],
        rating: 4.6,
        additionalInfo: {
            material: 'Fabric & Wood',
            dimensions: '200x90x85 cm',
            warranty: '2 years'
        },
        isNew: true
    },
    {
        id: 'living-2',
        name: 'Wooden Coffee Table',
        price: 180,
        category: 'Living',
        images: [
            livingCoffeeTable1,
            livingCoffeeTable2,
            livingCoffeeTable3,
            livingCoffeeTable4
        ],
        shortDescription: 'Minimal wooden coffee table.',
        description: 'A simple yet elegant coffee table made from high-quality wood, perfect for modern interiors.',
        colors: ['#8B5A2B', '#FFFFFF'],
        sizes: ['Standard'],
        tags: ['table', 'living', 'wood'],
        rating: 4.3,
        additionalInfo: {
            material: 'Solid Wood',
            dimensions: '100x60x45 cm',
            warranty: '1 year'
        },
        discount: 10
    },
    {
        id: 'living-3',
        name: 'Modern TV Stand',
        price: 260,
        category: 'Living',
        images: [
            livingTVStand1,
            livingTVStand2,
            livingTVStand3,
            livingTVStand4
        ],
        shortDescription: 'Sleek TV stand with storage.',
        description: 'A modern TV stand featuring clean lines and multiple storage compartments for your living room.',
        colors: ['#000000', '#8B5A2B'],
        sizes: ['120cm', '160cm'],
        tags: ['tv', 'storage', 'living'],
        rating: 4.4,
        additionalInfo: {
            material: 'Engineered Wood',
            dimensions: '160x40x50 cm',
            warranty: '2 years'
        },
        isNew: false
    },
    {
        id: 'bedroom-1',
        name: 'Queen Size Bed Frame',
        price: 680,
        category: 'Bedroom',
        images: [
            bedroom1,
            bedroom2,
            bedroom3,
            bedroom4
        ],
        shortDescription: 'Elegant queen size bed frame.',
        description: 'A modern queen size bed frame made from high-quality wood, designed for comfort and durability.',
        colors: ['#8B5A2B', '#000000'],
        sizes: ['Queen', 'King'],
        tags: ['bed', 'bedroom', 'wood'],
        rating: 4.6,
        additionalInfo: {
            material: 'Solid Wood',
            dimensions: '210x160x100 cm',
            warranty: '3 years'
        },
        isNew: true
    },
    {
        id: 'bedroom-2',
        name: 'Bedside Table',
        price: 140,
        category: 'Bedroom',
        images: [
            bedroomSideTable1,
            bedroomSideTable2,
            bedroomSideTable3,
            bedroomSideTable4
        ],
        shortDescription: 'Compact and stylish bedside table.',
        description: 'A minimalist bedside table with storage space, perfect for modern bedrooms.',
        colors: ['#FFFFFF', '#8B5A2B'],
        sizes: ['Standard'],
        tags: ['table', 'bedroom', 'storage'],
        rating: 4.3,
        additionalInfo: {
            material: 'Engineered Wood',
            dimensions: '50x40x60 cm',
            warranty: '1 year'
        },
        discount: 5
    },
    {
        id: 'bedroom-3',
        name: 'Sliding Door Wardrobe',
        price: 920,
        category: 'Bedroom',
        images: [
            bedroomSlidingWardrobe1,
            bedroomSlidingWardrobe2,
            bedroomSlidingWardrobe3,
            bedroomSlidingWardrobe4
        ],
        shortDescription: 'Spacious wardrobe with sliding doors.',
        description: 'A large wardrobe with sliding doors, offering ample storage space and a modern look.',
        colors: ['#000000', '#D2B48C'],
        sizes: ['200cm', '250cm'],
        tags: ['wardrobe', 'storage', 'bedroom'],
        rating: 4.7,
        additionalInfo: {
            material: 'Engineered Wood',
            dimensions: '200x60x220 cm',
            warranty: '3 years'
        },
        isNew: false
    }
]