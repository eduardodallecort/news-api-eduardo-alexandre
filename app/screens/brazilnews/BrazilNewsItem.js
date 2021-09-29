import { HStack, Text } from 'native-base'
import React from 'react'
import CardView from '../../components/CardView'

const BrazilNewsItem = ({ item }) => {
    return (
        <CardView>
            <HStack alignItems="center">
                <Text bold fontSize="md" marginLeft={2}>{item.title}</Text>
            </HStack>
        </CardView>
    )
}

export default BrazilNewsItem
