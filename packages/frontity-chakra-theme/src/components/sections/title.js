import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

const TitleSection = ({ title, subtitle, paragraph }) => {
    return (
        <Box as="section">
            <Box as="div"
            maxWidth="var(--md-content-width)"
            width="92%"
            margin="60px auto">
                <Heading as="h2" textAlign="center" marginBottom="30px">{title}</Heading>
                <Heading as="h5" fontStyle="italic" textAlign="center" marginBottom="30px" fontSize="22px">{subtitle}</Heading>
                <Text as="p" textAlign="center">{paragraph}</Text>
            </Box>
        </Box>
    )
}

export default TitleSection;