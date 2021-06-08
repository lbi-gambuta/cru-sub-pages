import React from 'react'
import { Box, SimpleGrid, Heading, Link, Flex} from '@chakra-ui/react'
import { connect } from 'frontity';

const Banner = () => (
    <Box 
        as="div"
        className={['footer-banner'].filter(Boolean).join(' ')}
        bg="#0A043E"
        padding="5% 0">

        <Flex 
        maxWidth="var(--content-width)"
        mx="auto"
        width="92%"
        className={['ftr-banner-content'].filter(Boolean).join('')}
        justifyContent="space-between"
        alignItems="center"
        margin="auto">
            <Box 
            as="div">
                <Box
                as="div">
                    <Heading as="h4" color="#ffffff">Ready to get started?</Heading>
                    <Heading as="h2" color="#ffffff">Get in touch or create an account.</Heading>
                </Box>
            </Box>
            <Box 
            as="div">
                <Box
                as="div">
                    <Box as="div" className={["btn-group"].filter(Boolean).join('')}>
                        <Link href="#" className="btn pink-btn">Create Account</Link>
                        <Link href="#" className="btn white-btn bg-transparent">Contact Sales</Link>
                    </Box>
                </Box>
            </Box>
        </Flex>
    </Box>
);

export default connect(Banner);