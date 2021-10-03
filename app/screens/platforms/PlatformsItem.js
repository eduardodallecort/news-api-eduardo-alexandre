import { Text, Heading, Link } from 'native-base'
import React from 'react'
import CardView from '../../components/CardView'

const PlatformsItem = ({ item }) => {
    return (
        <CardView>
            <Heading size="md" marginLeft={2}>{item.name}</Heading>
            <Text bold fontSize="md" marginLeft={2}>{item.description}</Text>
            <Link bold fontSize="md" marginLeft={2} href={item.url}>Click here to open the website</Link>
        </CardView>
    )
}

export default PlatformsItem
