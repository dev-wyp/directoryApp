import { api } from "../config/axios";

export const getAllUsers = async () => {
    return await api.get('https://dummyjson.com/users', {
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
    return await api.get(`https://dummyjson.com/users/${id}`, {
        params: {
            // cityCode: 'PAR',
            // radius: '1',
            // radiusUnit: 'KM',
            // // pageNumber: '1',
            // hotelSource: 'ALL'
        },
    })
};