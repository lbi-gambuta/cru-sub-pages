import React from 'react'
import {Box, Grid, GridItem, Heading, Text, Image} from '@chakra-ui/react'
import { styled } from 'frontity'
import contentImg from '../../assets/image.jpg';

const TwoColsImgText = ({ leftImage = contentImg, headingText = 'Reduce the friction to talk with your team', contentText="Walk or move to join a conversation just like you would in the office. You can only hear or be heard by people around you. Teamflow's spatial audio makes for the most natural happy hours, hangouts, or spontaneous chats."}) => {
    return(
        <Box as="section">
            <Box
            as="div"
            className={['section-two-cols image-text'].filter(Boolean).join('')}>
                <Grid
                maxWidth="var(--content-width)"
                alignItems="center"
                width="92%"
                margin="auto"
                className={['stc-content-wrapper'].filter(Boolean).join('')}
                padding="20px 0"
                templateColumns={{ md:"repeat(2, 1fr)", sm:"100%" }}>
                    <GridItem
                    className={['col-1 stc-image'].filter(Boolean).join('')}>
                        <Image src={leftImage} fallbackSrc="https://via.placeholder.com/150" margin="auto" />
                    </GridItem>
                    <GridItem
                    className={['col-2 stc-text'].filter(Boolean).join('')}>
                        <Box as="div"
                        paddingLeft={{ md:"5%", sm:"0" }}
                        maxWidth={{ md:"600px", sm:"100%" }}
                        marginTop={{ md:"initial", sm:"30px" }}>
                            <Heading as="h2">{headingText}</Heading>
                            <Text marginTop="30px">
                                {contentText}
                            </Text>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}

export default TwoColsImgText;