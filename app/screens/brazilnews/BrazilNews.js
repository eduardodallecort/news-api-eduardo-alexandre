import { FlatList, Text } from 'native-base'
import React, { useState, useEffect } from 'react'
import { useCallback } from 'react'
import { SafeAreaView } from 'react-native'

import brazilNewsService from '../../service/news/BrazilNewsService'
import BrazilNewsItem from './BrazilNewsItem'

const BrazilNews = () => {

    const [brazilNews, setBrazilNews] = useState([])

    useEffect(() => {

        const loadBrazilNews = async () => {
            let result = await brazilNewsService.getBrazilNews()
            setBrazilNews(result)
        }

        loadBrazilNews()
    }, [])

    const createBrazilNewsItem = useCallback(({ item }) => <BrazilNewsItem item={item} />, [])

    return (
        <SafeAreaView>
            <FlatList 
                data={brazilNews}
                renderItem={createBrazilNewsItem}
                />
        </SafeAreaView>
    )
}

export default BrazilNews
