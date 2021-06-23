import React from 'react'
import { Box, Heading, Image} from '@chakra-ui/react'
import TitleImage from '../../assets/title-image.jpg'

const ImageTitle = ( { title, img = TitleImage, ...props }) => {
    return (
         <Box as="section">
            <Box as="div"
            maxWidth="600px"
            margin="auto"
            width="92%"
            padding="5% 0"
            className={['section-image-title'].filter(Boolean).join('')}
            {...props}>
                <Image src={img} margin="auto"/>
                <Heading as="h3" color="var(--main-color)" textAlign="center" marginTop="30px">{title}</Heading>
            </Box>
        </Box>
    )
}

export default ImageTitle;