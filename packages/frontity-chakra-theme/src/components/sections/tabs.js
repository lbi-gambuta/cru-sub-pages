import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading, Text } from '@chakra-ui/react'

const TabsDisplay = ({ data }) => {
    return (
        <Tabs isFitted variant="enclosed"
            width="92%"
            margin="auto">
        <TabList justifyContent="center" borderColor="#000" border="0" position="relative"
        _after={{ content:'""', height:"2px", background:"#000", width:"108%", position:"absolute", bottom:"0px" }}>     
            {data.map((tab, index) => (
            <Tab backgroundColor="var(--main-color)" 
                color="#DAD9E1"
                borderTop="7px solid #FF00B5"
                borderLeft="2px solid transparent"
                borderRight="2px solid transparent"
                borderBottom="2px solid var(--main-color)"
                padding="10px 15px"
                margin="0 0.2em"
                key={index}
                borderRadius="0"
                maxWidth={ data.length * 300 > 1550 ? "calc(1550px / " + data.length + ")" : "300px" }
                zIndex="9"
                boxShadow="none"
                _active={{ boxShadow:"none", color:"#000" }}
                _selected={{ boxShadow:"none", color:"#000", bg:"#fff", borderColor:"#000", borderTop:"2px solid #000", borderBottomColor:"#fff", paddingTop:"14px" }}
                _hover={{ boxShadow:"none", color:"#000", bg:"#fff", borderColor:"#000", borderTop:"2px solid #000", borderBottomColor:"#fff", paddingTop:"14px" }}
                flexWrap="wrap"
                >
                    <Heading as="h4" textTransform="uppercase" margin="0.5em" fontSize="22px" fontWeight="700">{tab.label}</Heading>
                    <Text width="100%" fontWeight="600" fontSize="14px" letterSpacing="0.2px">{tab.text}</Text>
            </Tab>
            ))}
        </TabList>
        <TabPanels borderColor="#000">
            {data.map((tab, index) => (
            <TabPanel p={4} key={index}>
                {tab.content}
            </TabPanel>
            ))}
        </TabPanels>
        </Tabs>
    )
}

export default TabsDisplay