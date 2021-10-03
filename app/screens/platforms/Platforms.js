import { FlatList, Text } from 'native-base'
import React, { useState, useEffect } from 'react'
import { useCallback } from 'react'
import { SafeAreaView } from 'react-native'

import platformsService from '../../service/platforms/PlatformsService'
import PlatformsItem from './PlatformsItem'

const Platforms = () => {

    const [platforms, setPlatforms] = useState([])

    useEffect(() => {

        const loadPlatforms = async () => {
            let result = await platformsService.getPlatforms()
            setPlatforms(result)
        }

        loadPlatforms()
    }, [])

    const createPlatformsItem = useCallback(({ item }) => <PlatformsItem item={item} />, [])

    return (
        <SafeAreaView>
            <FlatList 
                data={platforms}
                renderItem={createPlatformsItem}
                />
        </SafeAreaView>
    )
}

export default Platforms
