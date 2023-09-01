import { AxiosAdmin } from "./AxiosInstance"

export const getAllPartnerImagees = async () => {
    try {
        const response = await AxiosAdmin.get('/partner')
        return response
    } catch (error) {
        return error?.response
    }
}


export const addPartnerImage = async (data) => {
    try {
        const response = await AxiosAdmin.post('/partner/upload', data)
        return response
    } catch (error) {
        return error?.response
    }
}

export const deletePartnerImage = async (imageId) => {
    try {
        const response = await AxiosAdmin.delete('/partner/' + imageId)
        return response
    } catch (error) {
        return error?.response
    }
}
