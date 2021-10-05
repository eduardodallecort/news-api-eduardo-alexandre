import { HStack, Text, Pressable } from 'native-base'
import React from 'react'
import CardView from '../../components/CardView'

const BrazilNewsItem = ({ item, onItemSelected }) => {
    return (
        <Pressable onPress={() => onItemSelected(item)}>
            <CardView>
                <HStack alignItems="center">
                    <Text bold fontSize="md" marginLeft={2}>{item.title}</Text>
                </HStack>
            </CardView>
        </Pressable>
        
    )
}

export default BrazilNewsItem;
