import { AxiosAdmin } from "./AxiosInstance"

export const getAllPortfolio = async () => {
    try {
        const response = await AxiosAdmin.get('/portfolio')
        return response
    } catch (error) {
        return error?.response
    }
}