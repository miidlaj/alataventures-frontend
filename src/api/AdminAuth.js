import { AxiosAdmin } from "./AxiosInstance"

export const adminLogin = async (data) => {
    try {
        const response = await AxiosAdmin.post('/auth/login', data)
        return response
    } catch (error) {
        return error?.response
    }

}