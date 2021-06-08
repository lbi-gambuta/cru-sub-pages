import React from 'react'
import { Heading, Box } from '@chakra-ui/react'
import Overview from "../sections/overview"
import TwoColsImgText from "../sections/two-cols-image-text"
import TwoColsTextImg from '../sections/two-cols-text-image'
import TitleSection from '../sections/title'
import Tile from '../sections/tile.js'

const CruTeam = () => {
    const tiles = [
        [{
            img : "#",
            title : "100+ Clients",
            desc : "Over our time as CRU we have worked with over 100 clients and have helped them generate significant sales and wine club member growth"
        }],
        [{
            img : "#",
            title : "35yr+ Experience",
            desc : "With over 20 years of experience in the wine industry and 15 years in tech, we know how to help you succeed."
        }],
        [{
            img : "#",
            title : "$25M+ Sales",
            desc : "We know how to use sales techniques and have assisted our client in leveraging over 100,000+ mailing list subscribers for successful campaigns"
        }]
    ];

    return (
        <Box as="div"
        className={['cru-team-content'].filter(Boolean).join('')}>
            <Overview textContent="CRU CONSULTING is your gateway to our extensive industry and technology knowledge base. Our Team can provide proven strategies, training, short and long term plans, on a range of services"
        buttonText="View Pricing" buttonLink="/pricing/" />
            <TwoColsImgText headingText="Ask a question, get an answer" 
                contentText={[ "CRU can consult on a wide range of digital services, including: ", 
                <ul>
                    <li>Sales &amp; marketing plus industry specific campaigns &amp; automation to help grow your business</li>
                    <li>Website and digital asset strategies to ensure a slick smooth professional website</li>
                    <li>UI &amp; UX ongoing advice</li>
                    <li>Industry best practices</li>
                    <li>Software, integrations &amp; tech stack selections</li>
                </ul> ]} />
            <TwoColsTextImg headingText="Become a digital expert" 
                contentText={[ "CRU can also provide training in areas such as:", 
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

export default CruTeam;