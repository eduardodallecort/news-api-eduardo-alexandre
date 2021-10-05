import React from 'react'
import { Box } from 'native-base'

const CardView = ({ children }) => {
    return (
        <Box backgroundColor="white"
            marginX={4} marginY={2} padding={4}
            rounded="10px" shadow={1}>
            {children}
        </Box>
    )
}

export default CardView
