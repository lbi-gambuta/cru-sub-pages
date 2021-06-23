import React from 'react'
import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
        Table, Tbody, Tr, Td, Th, Heading } from '@chakra-ui/react'
import { FaCheck } from 'react-icons/fa'

const DDAccordion = ({ title, subheading, features }) => {
    return (
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
                        {title}
                    </Heading> 
                    <Text as="span" fontSize="14px" color="#1F194A">{subheading}</Text>
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
                        { features.map( (feat) => 
                            <Tr>
                                <Td data-title={feat[0].title} width="20%">
                                    <Heading 
                                        as="h6"
                                        fontSize="16px"
                                        fontWeight="normal"
                                        color="#1F194A">
                                            {feat[0].title}
                                    </Heading>
                                </Td>
                                <Td data-plan-category="core" width="20%" textAlign="center">
                                    {feat[1].core == 'check' ? (
                                        <FaCheck display="inline" />
                                    ): '' }
                                </Td>
                                <Td data-plan-category="pro" width="20%" textAlign="center">
                                    {feat[1].core == 'check' ? (
                                        <FaCheck display="inline" />
                                    ): '' }
                                </Td>
                                <Td data-plan-category="xl" width="20%" textAlign="center">
                                    {feat[1].core == 'check' ? (
                                        <FaCheck display="inline" />
                                    ): '' }
                                </Td>
                                <Td data-plan-category="custom" width="20%" textAlign="center">
                                    {feat[1].core == 'check' ? (
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
    )
}

const DropDowns = ( { width="92%", ...props }) => {
    const features = [
        [ 
            {
                'title' : 'Back-ups'
            }, {
                'core' : 'check',
                'pro' : 'check',
                'xl' : 'check',
                'custom' : 'check'
            }
        ], 
        [ 
            {
                'title' : 'SSL Security'
            }, {
                'core' : 'check',
                'pro' : 'check',
                'xl' : 'check',
                'custom' : 'check'
            }
        ], 
        [ 
            {
                'title' : 'Unlimited Bandwidth'
            }, {
                'core' : 'check',
                'pro' : 'check',
                'xl' : 'check',
                'custom' : 'check'
            }
        ], 
        [ 
            {
                'title' : '24/7 Customer Support'
            }, {
                'core' : 'check',
                'pro' : 'check',
                'xl' : 'check',
                'custom' : 'check'
            }
        ]
    ];
    const hostingFeat = [
        [ 
            {
                'title' : 'Website Analytics'
            }, {
                'core' : 'check',
                'pro' : 'check',
                'xl' : 'check',
                'custom' : 'check'
            }
        ], 
        [ 
            {
                'title' : 'Promotional Pop-ups'
            }, {
                'core' : 'check',
                'pro' : 'check',
                'xl' : 'check',
                'custom' : 'check'
            }
        ], 
        [ 
            {
                'title' : 'Transaction Fees'
            }, {
                'core' : 'check',
                'pro' : 'check',
                'xl' : 'check',
                'custom' : 'check'
            }
        ], 
        [ 
            {
                'title' : 'Accept Donations'
            }, {
                'core' : 'check',
                'pro' : 'check',
                'xl' : 'check',
                'custom' : 'check'
            }
        ], 
        [ 
            {
                'title' : 'Sell Subscriptions'
            }, {
                'core' : 'check',
                'pro' : 'check',
                'xl' : 'check',
                'custom' : 'check'
            }
        ]
    ]; 
    const seoFeat = [
        [ 
            {
                'title' : 'Website Analytics'
            }, {
                'core' : 'check',
                'pro' : 'check',
                'xl' : 'check',
                'custom' : 'check'
            }
        ], 
        [ 
            {
                'title' : 'Promotional Pop-ups'
            }, {
                'core' : 'check',
                'pro' : 'check',
                'xl' : 'check',
                'custom' : 'check'
            }
        ]
    ]; 
    const securityFeat = [
        [ 
            {
                'title' : 'Website Analytics'
            }, {
                'core' : 'check',
                'pro' : 'check',
                'xl' : 'check',
                'custom' : 'check'
            }
        ], 
        [ 
            {
                'title' : 'Promotional Pop-ups'
            }, {
                'core' : 'check',
                'pro' : 'check',
                'xl' : 'check',
                'custom' : 'check'
            }
        ]
    ];     
    const sosFeat = [
        [ 
            {
                'title' : 'Website Analytics'
            }, {
                'core' : 'check',
                'pro' : 'check',
                'xl' : 'check',
                'custom' : 'check'
            }
        ], 
        [ 
            {
                'title' : 'Promotional Pop-ups'
            }, {
                'core' : 'check',
                'pro' : 'check',
                'xl' : 'check',
                'custom' : 'check'
            }
        ]
    ]; 
    return (
        <Box as="section"
        {...props}>
            <Box as="div"
            width={width}
            maxWidth="var(--content-width)"
            margin="auto">
                <Accordion allowToggle allowMultiple defaultIndex={[0]}>
                    <DDAccordion title="Standard Features All Plans" features={features}/>
                    <DDAccordion title="Hosting" features={hostingFeat}/>
                    <DDAccordion title="SEO" subheading="All sites come basic SEO" features={seoFeat}/>
                    <DDAccordion title="Security" subheading="All sites come with security as standard. Advanced options available for larger plans" features={securityFeat}/>
                    <DDAccordion title="SOS" subheading="All sites come with security as standard. Advanced options available for larger plans" features={sosFeat}/>    
                </Accordion>
            </Box>
        </Box>
    )
}

export default DropDowns;