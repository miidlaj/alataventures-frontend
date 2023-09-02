import { AxiosAdmin } from "./AxiosInstance"

export const sendMail = async (data) => {

    try {
        const response = await AxiosAdmin.post('/email/send', data)
        return response
    } catch (error) {
        return error?.response
    }

}
