import { api } from "../config/axios";

export const getAllProducts = async () => {
    return await api.get('https://dummyjson.com/products', {
        params: {
            // cityCode: 'PAR',
            // radius: '1',
            // radiusUnit: 'KM',
            // // pageNumber: '1',
            // hotelSource: 'ALL'
        },
    })
};

export const getProduct = async (id: string | undefined) => {
    return await api.get(`https://dummyjson.com/products/${id}`, {
        params: {
            // cityCode: 'PAR',
            // radius: '1',
            // radiusUnit: 'KM',
            // // pageNumber: '1',
            // hotelSource: 'ALL'
        },
    })
};