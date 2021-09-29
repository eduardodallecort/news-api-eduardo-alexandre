import axios from "axios"

const createApi = () => {
    let instance = axios.create({
        baseURL: 'https://newsapi.org/v2/',
        params: {
            apiKey: '9b0435f0caf44c72b22b840c15714eda'
        }
    })

    return instance
}

export const serviceApi = createApi()
