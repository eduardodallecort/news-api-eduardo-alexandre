import { serviceApi } from "../config/ServiceApi"

const getPlatforms = async () => {
    let response = await serviceApi.get('top-headlines/sources', {
        params: {
            
        }
    })

    let platformsList = response.data.sources
    let result = platformsList.map(res => {
        return {
            id: res.id,
            name: res.name,
            description: res.description,
            url: res.url
        }
    })

    return result
}

const platformsService = { getPlatforms }

export default platformsService