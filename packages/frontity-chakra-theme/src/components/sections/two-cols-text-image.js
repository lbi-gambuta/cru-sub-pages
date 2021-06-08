import React from 'react'
import {Box, Grid, GridItem, Heading, Text, Image} from '@chakra-ui/react'
import { styled } from 'frontity'
import contentImg from '../../assets/image-2.jpg';

const TwoColsTextImg = () => {
    return(
        <Box as="section">
            <Box
            as="div"
            className={['section-two-cols text-image'].filter(Boolean).join('')}>
                <Grid 
                maxWidth="var(--content-width)"
                alignItems="center"
                width="92%"
                margin="auto"
                className={['stc-content-wrapper'].filter(Boolean).join('')}
                padding="20px 0"
                templateColumns={{ md:"repeat(2, 1fr)", sm:"100%" }}>
                    <GridItem
                    className={['col-2 stc-text'].filter(Boolean).join('')}
                    order={{ md:"1", sm:"2" }}>
                        <Box as="div"
                        paddingRight={{ md:"5%", sm:"0" }}
                        maxWidth={{ md:"600px", sm:"100%" }}
                        marginTop={{ md:"initial", sm:"30px" }}>
                            <Heading as="h2">Collaborate better together.</Heading>
                            <Text marginTop="30px">
                            Lower the barrier to remote collaboration with screen-sharing, whiteboards, scratchpads, timers and coming soon, integrations to your favorite apps
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem
                    className={['col-1 stc-image'].filter(Boolean).join('')}
                    order={{ md:"2", sm:"1" }}>
                        <Image src={contentImg} fallbackSrc="https://via.placeholder.com/150" margin="auto" />
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}

export default TwoColsTextImg;

const Container = styled.section`
  @media only screen and (max-width:768px){
    .stc-content-wrapper {
        flex-wrap:wrap
    }
    .stc-image{
        order:1;
    }
    .stc-text{
        order:2;
    }
    .stc-content-wrapper>div {
        width: 100%;
        margin: 20px 0;
        padding: 0;
    }
    .stc-text>div {
        max-width: 100%;
        padding: 0;
    }
  }
`;