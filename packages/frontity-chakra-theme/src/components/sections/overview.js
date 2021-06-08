import React from 'react'
import { Box, Text, Link} from '@chakra-ui/react'

const overview = () => {
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
                    Underneath our well-designed dashboard, there's a lot of technical stuff happening to keep your WordPress sites fast, secure, and performing perfectly. Powered by the Google Cloud Platform, Flywheel's impressive hosting infrastructure was created to be everything your sites need (plus a whole lot more)!
                </Text>
            </Box>
            <Box as="div" 
            className={["btn-group"].filter(Boolean).join('')}
            justifyContent="center"
            margin="20px 0 0">
                <Link href="#" className="btn pink-btn">GET STARTED NOW</Link>
            </Box>
        </Box>
    </Box>
    )
}

export default overview;