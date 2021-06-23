import React from 'react'
import { Heading, Box, Divider, Link, Text, Grid, GridItem, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import { styled } from 'frontity'

import Overview from "../sections/overview"
import TwoColsImgText from "../sections/two-cols-image-text"
import TwoColsTextImg from '../sections/two-cols-text-image'
import TitleSection from '../sections/title'
import Tile from '../sections/tile.js'
import ImageTitle from '../sections/image-title'
import Teams from '../sections/team-sections'
import TabContentHeader from '../sections/tab-content'
import Logos from '../sections/logos'
import TabsDisplay from '../sections/tabs'

import MobileAccordion from '../sections/mobile-accordion'

const CRU360 = () => {
    return (
        <>
            <TabContentHeader width="100%" />
            <MobileAccordion />
        </>
    )
}

const Pricing = () => {
    const tabContents = [
        {
            label: "CRU 360",
            content: <CRU360 />,
            text: "Save by combining the best of our hosting & support plans in a single package"
        },
        {
            label: "CRU WP",
            content: "content here",
            text: "CRU WordPress hosting optimised for speed with built in safety & security"
        },
        {
            label: "CRU ECO",
            content: "content here",
            text: "Low to high volume eCommerce WordPress stores optimised for selling"
        },
        {
            label: "CRU XTRA",
            content: "content here",
            text: "Beat the competition with a multitude of add-ons & on-site integrations"
        },
        {
            label: "CRU SOS",
            content: "content here",
            text: "Support & maintenance plans & services giving end to end peade of mind"
        },
        {
            label: "CRU Team",
            content: "content here",
            text: "Website projects, marketing & consulting plus everything between"
        }
    ]
    return (
        <>
            <Overview textContent={["Choose the plan below that best suits your business needs.",
                <br/>,
                "Have a question or need a custom solution? ",
                <a href="#"> Get in touch by clicking here.</a> ]} 
                fontWeight="bold" 
                fontSize="20px"
                color="rgba(12, 17, 43, 0.8)"
                lineHeight="1.3" />
            <TabsDisplay data={tabContents} />
            
            <Divider />
            <Heading as="h6" fontStyle="italic" textAlign="center">Component Samples</Heading>
            <Divider />
            <Overview textContent="Underneath our well-designed dashboard, there's a lot of technical stuff happening to keep your WordPress sites fast, secure, and performing perfectly. Powered by the Google Cloud Platform, Flywheel's impressive hosting infrastructure was created to be everything your sites need (plus a whole lot more)!"
            buttonText="GET STARTED NOW" buttonLink="#" />
            <TitleSection title="Better site performance = better business" paragraph="A key component of having a site that sells is reliable performance, something that Flywheel excels in! We're here to make sure your eCommerce site ranks well, loads fast, and earns you the income you deserve!" />
            <TitleSection title="Flywheel's features &amp; platform" subtitle="Everything you need to grow your eCommerce site with ease!" />
            <Logos />
            <TabContentHeader />
            <Teams />
            <TwoColsImgText />
            <TwoColsTextImg />
            <ImageTitle />
            <Tile />
            <Divider />
        </>
    )
}

export default Pricing