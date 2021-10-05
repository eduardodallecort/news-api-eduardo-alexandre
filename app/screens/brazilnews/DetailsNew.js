import React, { useCallback, useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/core'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, Heading, VStack, Link, Image } from 'native-base'

const DetailsNew = () => {
    const route = useRoute()
    const newItem = route.params

    return (
        <SafeAreaView flex={1}>
            <VStack space={2} margin={4}>
                <Heading size="lg">{newItem.title}</Heading>
                <Text fontSize="md">{newItem.description}</Text>
                <Image
                    size={250}
                    alt="fallback text"
                    borderRadius={10}
                    resizeMode="cover"
                    source={{
                        uri: newItem.urlToImage,
                    }}
                    fallbackSource={{
                        uri: "https://www.w3schools.com/css/img_lights.jpg",
                    }}
                />
                <Text fontSize="sm">{newItem.content}</Text>
                
                <Link bold fontSize="md" href={newItem.url}>Click here to open the news on the original platform</Link>
            </VStack>
        </SafeAreaView>
    )
}

export default DetailsNew
