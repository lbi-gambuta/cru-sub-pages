import React from 'react'
import { Box, Link, Heading, Text, Grid, GridItem, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
    Table, Tbody, Tr, Td, Th} from '@chakra-ui/react'
import { styled } from 'frontity'
import { FaCheck } from 'react-icons/fa'

const MobileAccordion = () => {
    const allData = [
        { 
            id : "core",
            tabTitle : "CORE",
            price : "$499",
            description : "Per month or save $48 billed annually",    
            linkText : "Select this plan",       
            features : [
                {                                
                    id : "standard",
                    title : 'Standard Features All Plans',
                    features : [
                        { title : 'Back-ups', mark : 'check'},
                        { title : 'SSL Security', mark : 'check'},
                        { title : 'Unlimited Bandwidth', mark : 'check'},
                        { title : '24/7 Customer Support', mark : 'check'}
                    ]
                },
                {
                    id : "hosting",
                    title : 'Hosting',
                    features : [
                        { title : 'Website Analytics', mark : 'check'},
                        { title : 'Promotional Pop-ups', mark : 'check'},
                        { title : 'Transaction Fees', mark : 'check'},
                        { title : 'Accept Donations', mark : 'check'},
                        { title : 'Sell Subscriptions', mark : 'check'}
                    ]
                },
                {
                    id: 'seo',
                    title : 'SEO',
                    subheading: 'All sites come basic SEO',
                    features : [
                        { title : 'Website Analytics', mark : 'check'},
                        { title : 'Promotional Pop-ups', mark : 'check'}
                    ]
                },
                {
                    id: 'security',
                    title : "Security",
                    subheading : "All sites come with security as standard. Advanced options available for larger plans",
                    features : [                        
                        { title : 'Website Analytics', mark : 'check'},
                        { title : 'Promotional Pop-ups', mark : 'check'}
                    ]
                },
                {
                    id: 'sos',
                    title : 'SOS',
                    subheading : "All sites come with security as standard. Advanced options available for larger plans",
                    features : [                        
                        { title : 'Website Analytics', mark : 'check'},
                        { title : 'Promotional Pop-ups', mark : 'check'}
                    ]
                }
            ]
        },
        { 
            id : "pro",
            tabTitle : "PRO",
            price : "$999",
            description : "Per month or save $48 billed annually",
            linkText : "Get Started Now",
            linkClass : "selected",          
            features : [
                {                                
                    id : "standard",
                    title : 'Standard Features All Plans',
                    features : [
                        { title : 'Back-ups', mark : 'check'},
                        { title : 'SSL Security', mark : 'check'},
                        { title : 'Unlimited Bandwidth', mark : 'check'},
                        { title : '24/7 Customer Support', mark : 'check'}
                    ]
                },
                {
                    id : "hosting",
                    title : 'Hosting',
                    features : [
                        { title : 'Website Analytics', mark : 'check'},
                        { title : 'Promotional Pop-ups', mark : 'check'},
                        { title : 'Transaction Fees', mark : 'check'},
                        { title : 'Accept Donations', mark : 'check'},
                        { title : 'Sell Subscriptions', mark : 'check'}
                    ]
                },
                {
                    id: 'seo',
                    title : 'SEO',
                    subheading: 'All sites come basic SEO',
                    features : [
                        { title : 'Website Analytics', mark : 'check'},
                        { title : 'Promotional Pop-ups', mark : 'check'}
                    ]
                },
                {
                    id: 'security',
                    title : "Security",
                    subheading : "All sites come with security as standard. Advanced options available for larger plans",
                    features : [                        
                        { title : 'Website Analytics', mark : 'check'},
                        { title : 'Promotional Pop-ups', mark : 'check'}
                    ]
                },
                {
                    id: 'sos',
                    title : 'SOS',
                    subheading : "All sites come with security as standard. Advanced options available for larger plans",
                    features : [                        
                        { title : 'Website Analytics', mark : 'check'},
                        { title : 'Promotional Pop-ups', mark : 'check'}
                    ]
                }
            ]
        },
        { 
            id : "xl",
            tabTitle : "XL",
            price : "$1,999", 
            linkText : "Select this plan",                
            features : [
                {                                
                    id : "standard",
                    title : 'Standard Features All Plans',
                    features : [
                        { title : 'Back-ups', mark : 'check'},
                        { title : 'SSL Security', mark : 'check'},
                        { title : 'Unlimited Bandwidth', mark : 'check'},
                        { title : '24/7 Customer Support', mark : 'check'}
                    ]
                },
                {
                    id : "hosting",
                    title : 'Hosting',
                    features : [
                        { title : 'Website Analytics', mark : 'check'},
                        { title : 'Promotional Pop-ups', mark : 'check'},
                        { title : 'Transaction Fees', mark : 'check'},
                        { title : 'Accept Donations', mark : 'check'},
                        { title : 'Sell Subscriptions', mark : 'check'}
                    ]
                },
                {
                    id: 'seo',
                    title : 'SEO',
                    subheading: 'All sites come basic SEO',
                    features : [
                        { title : 'Website Analytics', mark : 'check'},
                        { title : 'Promotional Pop-ups', mark : 'check'}
                    ]
                },
                {
                    id: 'security',
                    title : "Security",
                    subheading : "All sites come with security as standard. Advanced options available for larger plans",
                    features : [                        
                        { title : 'Website Analytics', mark : 'check'},
                        { title : 'Promotional Pop-ups', mark : 'check'}
                    ]
                },
                {
                    id: 'sos',
                    title : 'SOS',
                    subheading : "All sites come with security as standard. Advanced options available for larger plans",
                    features : [                        
                        { title : 'Website Analytics', mark : 'check'},
                        { title : 'Promotional Pop-ups', mark : 'check'}
                    ]
                }
            ]
        },
        { 
            id : "custom",
            tabTitle : "Custom",
            price : "$2,000+",
            description : "Per month or save $48 billed annually",    
            linkText : "Select this plan",      
            features : [
                {                                
                    id : "standard",
                    title : 'Standard Features All Plans',
                    features : [
                        { title : 'Back-ups', mark : 'check'},
                        { title : 'SSL Security', mark : 'check'},
                        { title : 'Unlimited Bandwidth', mark : 'check'},
                        { title : '24/7 Customer Support', mark : 'check'}
                    ]
                },
                {
                    id : "hosting",
                    title : 'Hosting',
                    features : [
                        { title : 'Website Analytics', mark : 'check'},
                        { title : 'Promotional Pop-ups', mark : 'check'},
                        { title : 'Transaction Fees', mark : 'check'},
                        { title : 'Accept Donations', mark : 'check'},
                        { title : 'Sell Subscriptions', mark : 'check'}
                    ]
                },
                {
                    id: 'seo',
                    title : 'SEO',
                    subheading: 'All sites come basic SEO',
                    features : [
                        { title : 'Website Analytics', mark : 'check'},
                        { title : 'Promotional Pop-ups', mark : 'check'}
                    ]
                },
                {
                    id: 'security',
                    title : "Security",
                    subheading : "All sites come with security as standard. Advanced options available for larger plans",
                    features : [                        
                        { title : 'Website Analytics', mark : 'check'},
                        { title : 'Promotional Pop-ups', mark : 'check'}
                    ]
                },
                {
                    id: 'sos',
                    title : 'SOS',
                    subheading : "All sites come with security as standard. Advanced options available for larger plans",
                    features : [                        
                        { title : 'Website Analytics', mark : 'check'},
                        { title : 'Promotional Pop-ups', mark : 'check'}
                    ]
                }
            ]
        } 
    ];
    return (
        <>
            { allData.map( (data ) => 
            <Accordion allowToggle allowMultiple display={{ md:"none", sm:"block" }}>
                <AccordionItem data-id={data.id}>
                    <h2>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                            <Box as="div"
                                marginBottom={{ lg:"90px", sm:"20px" }}>
                                <Heading as="h4" textTransform="uppercase" fontSize="22px">
                                    {data.tabTitle}
                                </Heading>
                                <Box as="div">
                                    <Currency curCode={data.currency} />
                                    <Heading as="h2" fontSize="46px">
                                        {data.price}
                                    </Heading>                                
                                    <Text fontSize="14px">
                                        {data.description}
                                    </Text>
                                </Box>
                            </Box>
                            <TabLink text={data.linkText} tab={data.id} url="#" linkClass={data.linkClass} />
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box as="section">
                            <Box as="div"
                            width="100%"
                            maxWidth="var(--content-width)"
                            margin="auto">
                                <Accordion allowToggle allowMultiple defaultIndex={[0]}>
                                    { data.features.map( (d) => 
                                    <AccordionItem>
                                        {({ isExpanded }) => (
                                            <>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    <Heading as="h3" 
                                                    color="#1F194A"
                                                    display="inline-block"    
                                                    fontSize="22px"
                                                    minWidth="150px">
                                                        {d.title}
                                                    </Heading> 
                                                    <Text as="span" fontSize="14px" color="#1F194A">{d.subheading}</Text>
                                                </Box>                    
                                                {isExpanded ? (
                                                    <Text as="span"
                                                    fontSize="14px"
                                                    color="#1F194A"
                                                    marginRight="5px">Minimise</Text>
                                                ) : (
                                                <Text as="span"
                                                    fontSize="14px"
                                                    color="#1F194A"
                                                    marginRight="5px">Expand</Text>
                                                )}
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Table variant="striped">
                                                    <Tbody>
                                                        { d.features.map( (feat) => 
                                                            <Tr>
                                                                <Td data-title={feat.title} width="20%">
                                                                    <Heading 
                                                                        as="h6"
                                                                        fontSize="16px"
                                                                        fontWeight="normal"
                                                                        color="#1F194A">
                                                                            {feat.title}
                                                                    </Heading>
                                                                </Td>
                                                                <Td width="20%" textAlign="center">
                                                                    {feat.mark == 'check' ? (
                                                                        <FaCheck display="inline" />
                                                                    ): '' }
                                                                </Td>
                                                            </Tr>
                                                        )}
                                                    </Tbody>
                                                </Table>
                                            </AccordionPanel>
                                            </>
                                        )}
                                    </AccordionItem>  
                                    )}  
                                </Accordion>
                            </Box>
                        </Box>                    
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            )}
        </>
    )
}

export default MobileAccordion;

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
        className={`btn pink-hovered ${linkClass}`}
        {...props}>
            {text}
        </Link>
    )
}