import React from 'react'
import { Box, Link, Heading, Text, Grid, GridItem} from '@chakra-ui/react'
import { styled } from 'frontity'
import DropDowns from './drop-downs'

const TabLink = ({text, tab, linkClass, url = "#", ...props }) => {
    return (        
        <Link 
        maxWidth="200px"
        bottom="0"
        borderColor="#1F146A"
        color="#1D1748"
        position={{ lg:"absolute", rd:"initial" }}
        textTransform="uppercase"
        href={url} data-tab={tab} 
        className={`btn green-hovered ${linkClass}`}
        {...props}>
            {text}
        </Link>
    )
}

const Currency = ({curCode = "USD", ...props}) => {
    return (
        <Text textAlign="right">
            <Box as="span"
                background="var(--light-pink)"
                padding="5px 10px"
                fontSize="14px"
                fontWeight="600"
                borderRadius="5px">
                {curCode}
            </Box>
        </Text>
    )
}

const TabItem = ({tabID, tabTitle, price, description, currency = "USD", linkText = "Select this plan", linkClass = "", ...props}) => {
    return (
        <GridItem
        padding="20px"
        className={['sth-item'].filter(Boolean).join('')}
        id={tabID}
        borderBottom={{ lg:"0", sm:"2px solid #ddd" }}
        {...props}>
            <Box as="div"
            className={['sth-item-inner'].filter(Boolean).join('')}
            maxWidth={{ lg:"400px", rd:"100%" }}
            position={{ rd:"initial" }}
            padding="20px 10px">
                <Box as="div"
                marginBottom={{ lg:"90px", sm:"20px" }}>
                    <Heading as="h4" textTransform="uppercase" fontSize="22px">
                        {tabTitle}
                    </Heading>
                    <Box as="div">
                        <Currency curCode={currency} />
                        <Heading as="h2" fontSize="46px">
                            {price}
                        </Heading>                                
                        <Text fontSize="14px">
                            {description}
                        </Text>
                    </Box>
                </Box>
                <TabLink text={linkText} tab={tabID} url="#" linkClass={linkClass} />
            </Box>
        </GridItem>
    )
}

const TabContentHeader = () => {
    return (
        <Container className='section-tabs'>
            <Box as="div"
            className={['cw-tab-header'].filter(Boolean).join('')}
            padding="5% 0">
                <Grid
                className={['sth-content-wrapper'].filter(Boolean).join('')}
                position="relative"
                maxWidth="var(--content-width)"
                width="92%"
                margin="auto"
                justifyContent="space-between"
                alignItems="stretch"
                templateColumns={{ lg:"repeat(5, 1fr)", rd:"50% 50%", sm:"100%" }}
                >
                    <GridItem 
                    colSpan={{ lg:1, rd:2, sm:1 }}
                    padding="20px"
                    className={['sth-item sth-title'].filter(Boolean).join('')}
                    borderBottom={{ lg:"0", sm:"2px solid #ddd" }}>
                        <Box as="div"
                        className={['sth-item-inner'].filter(Boolean).join('')}
                        position={{ rd:"initial" }}>
                            <Heading as="h3" 
                            textTransform="uppercase" 
                            fontSize="36px" 
                            fontWeight="600" 
                            borderBottom="7px solid var(--pink)"
                            width="fit-content"
                            marginTop={{ lg:"12%", rd:"0" }}>
                                CRU 360
                            </Heading>
                        </Box>
                    </GridItem>
                    <TabItem tabID="core" tabTitle="CORE" price="$499" description="Per month or save $48 billed annually"/>
                    <TabItem tabID="pro" tabTitle="PRO" price="$999" description="Per month or save $48 billed annually" linkText="Get Started Now" linkClass="selected" />
                    <TabItem tabID="xl" tabTitle="XL" price="$1,999"/>
                    <TabItem tabID="custom" tabTitle="Custom" price="$2,000+" description="Per month or save $48 billed annually"/>
                </Grid>
            </Box>
            <DropDowns />
        </Container>
    )
}

export default TabContentHeader;

const Container = styled.section`
    @media only screen and (min-width:1100px){
        .sth-content-wrapper:after {
            content: '';
            height: 2px;
            width: 100%;
            bottom: 70px;
            position: absolute;
            left: 0;
            background: #ddd;
        }
    }
`