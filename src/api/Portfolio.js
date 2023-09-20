import { AxiosAdmin } from "./AxiosInstance"

export const getAllPortfolio = async (page, pageSize) => {
    try {
        const response = await AxiosAdmin.get(`/portfolio?page=${page}&pageSize=${pageSize}`)
        return response
    } catch (error) {
        return error?.response
    }
}

export const getLatestPortfolio = async () => {
    try {
        const response = await AxiosAdmin.get(`/portfolio/latest`)
        return response
    } catch (error) {
        return error?.response
    }
}

export const addPortfolio = async (data) => {
    try {
        const response = await AxiosAdmin.post('/portfolio', data)
        return response
    } catch (error) {
        return error?.response
    }
}

export const updatePortfolio = async (portfolioId ,data) => {
    try {
        const response = await AxiosAdmin.put('/portfolio/' + portfolioId, data)
        return response
    } catch (error) {
        return error?.response
    }
}

export const deletePortfolio = async (portfolioId) => {
    try {
        const response = await AxiosAdmin.delete('/portfolio/' + portfolioId)
        return response
    } catch (error) {
        return error?.response
    }
}