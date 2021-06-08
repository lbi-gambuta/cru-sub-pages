import React from 'react'
import { Grid, GridItem, Box, Heading, Text, Image } from '@chakra-ui/react'
import img1 from '../../assets/team-img1.jpg'
import img2 from '../../assets/team-img2.jpg'
import img3 from '../../assets/team-img3.jpg'

const Team = ({ position, description, img, ...props }) => {
    return (        
        <GridItem
         {...props}
         background="#F6F9FE" 
         maxWidth="345px"
         padding="20px"
         borderRadius="25px"
         border="2px solid #F1F2F7"
         margin="0 auto">
            <Box as="div" 
                border="1px solid #ddd" 
                borderRadius="5px" 
                width="100px"
                margin="auto"
                textAlign="center"
                padding="10px">
                <Heading as="h4" fontWeight="600" fontSize="22px">{position}</Heading>
            </Box>
            <Text textAlign="center" margin="20px 0">{description}</Text>
            <Image src={img} margin="auto"/>
        </GridItem>
    )
}
const Teams = () => {
    return (
        <Box as="section">
            <Box as="div" 
                width="92%"
                maxWidth="var(--content-width)"
                margin="30px auto">
                <Heading as="h2"
                    maxWidth="1050px"
                    margin="0 auto 40px">
                        Here's how <br/> Teamflow works.
                </Heading>
                <Grid gridTemplateColumns={{ md:"repeat(3, 1fr)", rd:"100%" }} gap="25px"
                    maxWidth="1050px"
                    margin="auto">
                    <Team position="1" description="You see your video in a bubble on a virtual office floor plan." img={img1} />
                    <Team position="2" description="You move your video around like in a video game." img={img2} />
                    <Team position="3" description="You only hear people around your bubble." img={img3} />
                </Grid>
                <Box as="div" 
                background="#F6F9FE"
                maxWidth="1050px"
                padding="10px"
                borderRadius="25px"
                border="2px solid #F1F2F7"
                margin="30px auto">
                    <Heading 
                        textAlign="center"
                        fontSize="20px"
                        fontWeight="normal"
                        maxWidth="800px"
                        padding="30px"
                        lineHeight="1.5"
                        margin="auto">
                        This means that when you want to check in on someone, you can just walk up to them. No more back and forth on Slack or Zoom scheduling nightmares.
                    </Heading>
                </Box>
            </Box>
        </Box>
    )
}

export default Teams;