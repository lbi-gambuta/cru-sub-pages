import React from 'react'
import { Box, Text, Link} from '@chakra-ui/react'

const Overview = ({ textContent="Text here", buttonText, buttonLink}) => {
    return (<Box 
        as="div"
        className={['section-overview'].filter(Boolean).join(' ')}
        padding="5% 0">
        <Box 
        as="div"
        className={['so-content-wrapper'].filter(Boolean).join(' ')}
        maxWidth="800px"
        mx="auto"
        width="92%">
            <Box
            as="div">
                <Text fontWeight="medium" textAlign="center">
                    {textContent}
                </Text>
            </Box>
            {buttonText &&
                <Box as="div" 
                    className={["btn-group"].filter(Boolean).join('')}
                    justifyContent="center"
                    margin="20px 0 0">
                        <Link href={buttonLink} className="btn pink-btn">{buttonText}</Link>
                </Box>}
        </Box>
    </Box>
    )
}

export default Overview;