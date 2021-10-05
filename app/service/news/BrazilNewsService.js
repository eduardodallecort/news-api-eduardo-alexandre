import { serviceApi } from "../config/ServiceApi"

const getBrazilNews = async () => {
    let response = await serviceApi.get('top-headlines', {
        params: {
            country: 'br'
        }
    })

    let brazilNewsList = response.data.articles
    let result = brazilNewsList.map(res => {
        return {
            title: res.title,
            description: res.description,
            url: res.url,
            publishedAt: res.publishedAt,
            content: res.content,
            urlToImage: res.urlToImage,
            source_name: res.source.name,
        }
    })

    return result
}

const brazilNewsService = { getBrazilNews }

export default brazilNewsService