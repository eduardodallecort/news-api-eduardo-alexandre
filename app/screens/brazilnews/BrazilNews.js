import { useNavigation } from '@react-navigation/native'
import { FlatList, Text } from 'native-base'
import React, { useState, useEffect } from 'react'
import { useCallback } from 'react'
import { SafeAreaView } from 'react-native'
import { ROUTE_NEW_DETAILS } from '../../navigation/AppRoutes'

import brazilNewsService from '../../service/news/BrazilNewsService'
import BrazilNewsItem from './BrazilNewsItem'

const BrazilNews = () => {

    const [brazilNews, setBrazilNews] = useState([])

    const navigation = useNavigation()

    useEffect(() => {
        const loadBrazilNews = async () => {
            let result = await brazilNewsService.getBrazilNews()
            setBrazilNews(result)
        }

        loadBrazilNews()
    }, [])

    const openDetails = useCallback((item) => {
        navigation.navigate(ROUTE_NEW_DETAILS, item)
    }, [])

    const createBrazilNewsItem = useCallback( ({item} ) =>
        <BrazilNewsItem item={item} onItemSelected={ openDetails } />
    , [])

    const itemKeyExtractor = useCallback((item) => item.title, [])

    return (
        <SafeAreaView>
            <FlatList 
                data={brazilNews}
                renderItem={createBrazilNewsItem}
                keyExtractor={itemKeyExtractor} />
        </SafeAreaView>
    )
}

export default BrazilNews
