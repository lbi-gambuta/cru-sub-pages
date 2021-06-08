import React from 'react'
import { Box, Grid, Image, Heading, Text, GridItem} from '@chakra-ui/react'
import { styled } from 'frontity'
import img1 from "../../assets/icon1.jpg"
import img2 from "../../assets/icon2.jpg"
import img3 from "../../assets/icon3.jpg"

const TileItem = ({ img, title, desc, ...props }) => {
    return (
        <GridItem
        className={['stile-item'].filter(Boolean).join('')}
        textAlign="center"
        padding={{ md:"0 5%", sm:"0" }}
        {...props} >
            <Box as="div"
            className={['stile-item-inner'].filter(Boolean).join('')}
            margin={{ md:"initial", sm:"auto" }}
            padding="10px 0"
            maxWidth="350px">
                <Image src={img} margin="auto"/>
                <Heading as="h4" margin="20px 0 30px" fontSize="22px;" color="var(--main-color)" textAlign="center" textTransform="uppercase">
                    {title}
                </Heading>
                <Text textAlign="center">
                    {desc}
                </Text>
            </Box>
        </GridItem>
    )
}


const Tile = ( { 
    tiles = [
        [{
            img : {img1},
            title : "Auto-healing Technology",
            desc : "Your site will fix itseld in the rare event of a service failure, meaning better uptime, more reliable performance, and fewer site crashes."
        }],
        [{
            img : {img2},
            title : "Flycache",
            desc : "Our custom caching technology is optimized for the most popular themes and plugins to make sure your site is cached (or not!) when it should be."
        }],
        [{
            img : {img3},
            title : "CDN",
            desc : "Every site gets world-class CDN at no extra cost, so site visitors around the world willl see exceptional page speeds (not blank loading screens)."
        }] 
    ]
 }) => {
    return (
        <Box as="section">
            <Box as="div"
            className={['section-tile'].filter(Boolean).join('')}
            padding="5% 0">
                <Grid
                className={['stile-content-wrapper'].filter(Boolean).join('')}
                maxWidth="var(--content-width)"
                width="92%"
                margin="auto"
                justifyContent="center"
                alignItems="start"
                templateColumns={{ md:"repeat(3, 1fr)", sm:"100%" }}
                >
                    {
                        tiles.map( (tile) => {
                            <TileItem img={tile[0].img} title={tile[0].tile} desc={tile[0].desc} />
                        })
                    }
                    {/* <TileItem img={img1} paddingLeft={{ md:"0" }} title="Auto-healing Technology" desc="Your site will fix itseld in the rare event of a service failure, meaning better uptime, more reliable performance, and fewer site crashes." />
                    <TileItem img={img2} title="Flycache" desc="Our custom caching technology is optimized for the most popular themes and plugins to make sure your site is cached (or not!) when it should be." />
                    <TileItem img={img3} paddingRight={{ md:"0" }} title="CDN" desc="Every site gets world-class CDN at no extra cost, so site visitors around the world willl see exceptional page speeds (not blank loading screens)." /> */}
                </Grid>
            </Box>
        </Box>
    )
}

export default Tile;