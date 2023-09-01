import { AxiosAdmin } from "./AxiosInstance"

export const getAllImagees = async () => {
    try {
        const response = await AxiosAdmin.get('/gallery')
        return response
    } catch (error) {
        return error?.response
    }
}


export const addImage = async (data) => {
    try {
        const response = await AxiosAdmin.post('/gallery/upload', data)
        return response
    } catch (error) {
        return error?.response
    }
}

export const deleteImage = async (imageId) => {
    try {
        const response = await AxiosAdmin.delete('/gallery/' + imageId)
        return response
    } catch (error) {
        return error?.response
    }
}
