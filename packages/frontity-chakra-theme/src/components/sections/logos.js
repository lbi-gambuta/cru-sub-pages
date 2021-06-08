import React from 'react'
import { Box, Grid, GridItem, Text, Image } from '@chakra-ui/react'
import Latlassian from '../../assets/logos-atlassian.png'
import Lautodesk from '../../assets/logos-autodesk.png'
import Lmixpanel from '../../assets/logos-mixpanel.png'
import Lnetflix from '../../assets/logos-netflix.png'
import Lquora from '../../assets/logos-quora.png'
import Lshopify from '../../assets/logos-shopify.png'
import Lstripe from '../../assets/logos-stripe.png'
import Luber from '../../assets/logos-uber.png'

const LogoItem = ({ imgSrc, ...props }) => {
    return (
        <GridItem
         {...props} 
         padding="20px 15px">
            <Image src={imgSrc} height="40px" width="auto" margin="auto" objectFit="contain" />
        </GridItem>
    )
}

const Logos = () => {
    return (
        <Box as="section">
            <Box as="div"
                width="92%"
                maxWidth="var(--content-width)"
                margin="auto">
                <Text textAlign="center" maxWidth="800px" margin="30px auto">
                    Trusted by the world's <Box as="span" fontWeight="bold">top businesses</Box> to build <Box as="span" fontWeight="bold">stronger teams</Box>
                </Text>
                <Grid
                    gridTemplateColumns={{ md:"repeat(4, 25%)", rd:"repeat(3, 33.33%)", sm:"repeat(2, 50%)" }}>
                        <LogoItem imgSrc={Lstripe} />
                        <LogoItem imgSrc={Lshopify} />
                        <LogoItem imgSrc={Lautodesk} />
                        <LogoItem imgSrc={Lnetflix} />
                        <LogoItem imgSrc={Lquora} />
                        <LogoItem imgSrc={Luber} />
                        <LogoItem imgSrc={Lmixpanel} />
                        <LogoItem imgSrc={Latlassian} />
                </Grid>
            </Box>
        </Box>
    )
}

export default Logos;