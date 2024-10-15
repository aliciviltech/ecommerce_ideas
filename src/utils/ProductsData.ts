
export type menSuitType = {
    id: string,
    gender: string,
    category: string,
    itemCode: string,
    title: string,
    price: number,
    colors: any[],
    material:string,
    discount: number|null,
    instock:boolean,
    // imageURL: {defaultImage: string, [key:string]:string}
}

export const menSuit: menSuitType[] = [
    {
        id: "1",
        gender: 'male',
        category: 'kurta',
        itemCode: "item1",
        title: "Supreme Latha Unstitched Fabric Cotton S-LF",
        price: 4620,
        colors: [
            {
                colorCode: '#b3c1ea',
                colorImage: 'https://www.gulahmedshop.com/media/catalog/product/4/1/412058-abc_6_.jpg?optimize=medium&fit=bounds&height=900&width=600',
            },
            {
                colorCode: '#e3e1ed',
                colorImage: 'https://www.gulahmedshop.com/media/catalog/product/4/1/412067-abc_6_.jpg?optimize=medium&fit=bounds&height=900&width=600',
            },
            {
                colorCode: '#847a8b',
                colorImage: 'https://www.gulahmedshop.com/media/catalog/product/4/1/412061-abc_6_.jpg?optimize=medium&fit=bounds&height=900&width=600',
            },
            
        ],
        material:'cotton',
        discount: 20,
        instock:true,
    },
    {
        id: "2",
        gender: 'male',
        category: 'kurta',
        itemCode: "item2",
        title: "Libas e Khas Unstitched Fabric Cotton-LF",
        price: 4725,
        colors: [
            {
                colorCode: '#e3e1ef',
                colorImage: 'https://www.gulahmedshop.com/media/catalog/product/4/1/411643-abc_6_.jpg?optimize=medium&fit=bounds&height=900&width=600',
            },
            {
                colorCode: '#312f32',
                colorImage: 'https://www.gulahmedshop.com/media/catalog/product/4/1/411647-abc_6_.jpg?optimize=medium&fit=bounds&height=900&width=600',
            },
        ],
        material:'cotton',
        discount: null,
        instock:true,
    },
    {
        id:"3",
        gender: 'male',
        category: 'kurta',
        itemCode: "item3",
        title: "Fortune Plus Unstitched Fabric Cotton-LF",
        price: 4995,
        colors: [
            {
                colorCode: '#f5f3e9',
                colorImage: 'https://www.gulahmedshop.com/media/catalog/product/4/1/411752-abc_6_.jpg?optimize=medium&fit=bounds&height=900&width=600',
            },
            {
                colorCode: '#302e31',
                colorImage: 'https://www.gulahmedshop.com/media/catalog/product/4/1/411756-abc_5_.jpg?optimize=medium&fit=bounds&height=900&width=600',
            },
        ],
        material:'cotton',
        discount: null,
        instock:true,
    },
    {
        id:"4",
        gender: 'male',
        category: 'kurta',
        itemCode: "item4",
        title: "Purple Styling Suit SK-S24-073",
        price: 4995,
        colors: [
            {
                colorCode: '#493c49',
                colorImage: 'https://www.gulahmedshop.com/media/catalog/product/p/u/purple_styling_suit_sk-s24-073_2_.jpg?optimize=medium&fit=bounds&height=900&width=600',
            },
        ],
        material:'cotton',
        discount: 30,
        instock:true,
    },
    {
        id:"5",
        gender: 'male',
        category: 'kurta',
        itemCode: "item5",
        title: "Rust Basic Suit SK-E24-052",
        price: 6990,
        colors: [
            {
                colorCode: '#b78876',
                colorImage: 'https://www.gulahmedshop.com/media/catalog/product/r/u/rust_basic_suit_sk-e24-052_3_.jpg?optimize=medium&fit=bounds&height=900&width=600',
            },
        ],
        material:'cotton',
        discount: 30,
        instock:true,
    },
    {
        id:"6",
        gender: 'male',
        category: 'kurta',
        itemCode: "item6",
        title: "Green Styling Suit SK-S24-039",
        price: 7172,
        colors: [
            {
                colorCode: '#5e6f5c',
                colorImage: 'https://www.gulahmedshop.com/media/catalog/product/g/r/green_styling_suit_sk-s24-039_3_.jpg?optimize=medium&fit=bounds&height=900&width=600',
            },
        ],
        material:'cotton',
        discount: null,
        instock:true,
    },
    {
        id:"7",
        gender: 'male',
        category: 'kurta',
        itemCode: "item7",
        title: "Rust Styling Suit SK-S24-038",
        price: 7172,
        colors: [
            {
                colorCode: '#95624c',
                colorImage: 'https://www.gulahmedshop.com/media/catalog/product/r/u/rust_styling_suit_sk-s24-038_2_.jpg?optimize=medium&fit=bounds&height=900&width=600',
            },
        ],
        material:'cotton',
        discount: 25,
        instock:true,
    },
    {
        id:"8",
        gender: 'male',
        category: 'kurta',
        itemCode: "item8",
        title: "Camel Styling Suit SK-PSD24-013",
        price: 13329,
        colors: [
            {
                colorCode: '#b89873',
                colorImage: 'https://www.gulahmedshop.com/media/catalog/product/c/a/camel_styling_suit_sk-psd24-013_3_.jpg?optimize=medium&fit=bounds&height=900&width=600',
            },
        ],
        material:'cotton',
        discount: null,
        instock:true,
    },


]
console.log(menSuit);