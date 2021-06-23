import React from 'react'
import { Heading, Box } from '@chakra-ui/react'
import Overview from "../sections/overview"
import TwoColsImgText from "../sections/two-cols-image-text"
import TwoColsTextImg from '../sections/two-cols-text-image'
import TitleSection from '../sections/title'
import Tile from '../sections/tile.js'
import TabsDisplay from '../sections/tabs.js'

import cTimg1 from '../../assets/consult-3.jpg'
import cTimg2 from '../../assets/consult-cru-2.jpg'

import { FaUsers, FaDollarSign } from 'react-icons/fa'
import { RiUserStarFill } from 'react-icons/ri'


const tiles = [
    [{
        img : <FaUsers />,
        title : "100+ Clients",
        desc : "Over our time as CRU we have worked with over 100 clients and have helped them generate significant sales and wine club member growth"
    }],
    [{
        img : <RiUserStarFill />,
        title : "35yr+ Experience",
        desc : "With over 20 years of experience in the wine industry and 15 years in tech, we know how to help you succeed."
    }],
    [{
        img : <FaDollarSign />,
        title : "$25M+ Sales",
        desc : "We have assisted our client in leveraging over 100,000+ mailing list subscribers for successful campaigns"
    }]
];

const ProjectsTab = () => {
    return (
        <>
            <Overview textContent="CRU PROJECTS offers a range of one-off services that are tailored to the liquor industry. These include web and software development, API integrations, as well as other custom projects." buttonText="View Our Plans" buttonLink="/pricing/" />
            <TwoColsImgText headingText="Plan, design, build, deploy with CRU" 
            subHeading="CRU PROJECTS covers a wide range of digital services, including:"
            contentText={[ 
                <ul>
                    <li>Website &amp; landing page design &amp; development</li>
                    <li>Platform &amp; API  integrations</li>
                    <li>Headless CMS rebuilds for super fast enterprise stores</li>
                    <li>Website optimisation, reskins &amp; clean up projects</li>
                    <li>Google Audit and tracking and tagging clean-up</li>
                    <li>Software &amp; custom plugin development</li>
                </ul> ]} />
            <TwoColsTextImg headingText="Why Choose CRU for your online store?" 
            subHeading="Our sites are 100% customisable"
            contentText={[ 
                <ul>
                    <li>Customisable features</li>
                    <li>Unlimited design components</li>
                    <li>Endless integration possibilities</li>
                    <li>Built on Wordpress with over 30million users</li>
                </ul> ]} />
            <TwoColsImgText headingText="Delivering in scope &amp; on time" 
            subHeading="Fully scoped and clearly presented"
            contentText={[
                <ul>
                    <li>Project scopes and deliveries that are clear and process driven</li>
                    <li>Dedicated manager to drive projects forward</li>
                    <li>Multiple options to have your project delivered faster</li>
                </ul> ]} />
            <TwoColsTextImg headingText="Competitive pricing " 
            subHeading="We offer competitive pricing"
            contentText={[  
                <ul>
                    <li>Fixed or variable pricing to suit your budget</li>
                    <li>Pricing that doesn’t eat into your ROI</li>
                    <li>Transparent pricing from start to finish.</li>
                </ul> ]} />
            <TwoColsImgText headingText="Why choose CRU for your projects" 
            subHeading="Intimate understanding of the liquor industry enables our Team to deliver world class projects"
            contentText={[
                <ul>
                    <li>Intimate knowledge of the liquor industry</li>
                    <li>Extensive technical experience</li>
                    <li>Delivering over 1000 client projects </li>
                </ul>
            ]} />
            <Tile tiles={tiles}/>
        </>
    )
}

const ConsultTab = () => {
    return (
        <Box as="div"
        className={['cru-team-content'].filter(Boolean).join('')}>
            <Overview textContent="CRU CONSULTING is your gateway to our extensive industry and technology knowledge base. Our Team can provide proven strategies, training, short and long term plans, on a range of services"
        buttonText="View Pricing" buttonLink="/pricing/" />
            <TwoColsImgText 
            leftImage = {cTimg1}
            headingText="Ask a question, get an answer" 
                subHeading="CRU can consult on a wide range of digital services, including:"
                contentText={[ 
                <ul>
                    <li>Sales &amp; marketing plus industry specific campaigns &amp; automation to help grow your business</li>
                    <li>Website and digital asset strategies to ensure a slick smooth professional website</li>
                    <li>UI &amp; UX ongoing advice</li>
                    <li>Industry best practices</li>
                    <li>Software, integrations &amp; tech stack selections</li>
                </ul> ]} />
            <TwoColsTextImg headingText="Become a digital expert" 
                rightImage = {cTimg2}
                subHeading="CRU can also provide training in areas such as:"
                contentText={[
                <ul>
                    <li>Website functionality including product and and eCommerce training.</li>
                    <li>Building your own landing pages</li>
                    <li>SEO best practices and how to ensure your content is applied efficiently</li>
                </ul> ]}  />
            <TitleSection title="Leverage our Industry experience" subtitle="Talk to our industry experts and leverage our extensive knowledge in the liquor and tech industry" />
            <Tile tiles={tiles}/>
        </Box>
    )
}

const CruTeam = () => {
    const tabContents = [
        {
            label: "CRU Projects",
            content: <ProjectsTab />
        },
        {
            label: "CRU Consulting",
            content: <ConsultTab />
        }
    ]
    return (
        <>
            <Overview textContent="Click the tabs below to find out more about our design, development &amp; marketing services as well as our specialised consulting services." 
                fontWeight="bold" 
                fontSize="20px"
                color="rgba(12, 17, 43, 0.8)"
                lineHeight="1.3" />
            <TabsDisplay data={tabContents} />
        </>
    )
}

export default CruTeam;