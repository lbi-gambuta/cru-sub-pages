import React from 'react'
import { Heading, Box } from '@chakra-ui/react'
import Overview from "../sections/overview"
import TwoColsImgText from "../sections/two-cols-image-text"
import TwoColsTextImg from '../sections/two-cols-text-image'
import TitleSection from '../sections/title'
import Tile from '../sections/tile.js'

const Hosting = () => {
    const tiles1 = [
        [{
            img : "#",
            title : "Auto-healing Technology",
            desc : "Your site will fix itself in the rare event of a service failure, meaning you can focus more on what makes your business unique. With fewer crashes and better uptime, you'll be able to provide uninterrupted customer experiences."
        }],
        [{
            img : "#",
            title : "CRU Caching",
            desc : "Our custom caching technology is optimized to match your site's unique requirements and themes, so that you get the most out of our service!"
        }],
        [{
            img : "#",
            title : "CRU CDN",
            desc : "All our sites use a world-class CDN, so that means you can get great website performance for customers no matter where they are."
        }]
    ];

    const tiles2 = [
        [{
            img : "#",
            title : "Increase SEO Rankings",
            desc : "Google's algorithm considers page speed when ranking sites, so investing in fast infrastructure can improve your SEO and the number of new visitors finding your site!"
        }],
        [{
            img : "#",
            title : "Provide Better User Experience",
            desc : "We work with you to ensure your website loads quickly, so that over 50% of potential customers don't abandon their endeavour."
        }],
        [{
            img : "#",
            title : "Earn More Revenue",
            desc : "For every 100 milliseconds Amazon sped up load time, they saw an increase in sales by 1%. Combine that with all those new visitors finding your site in Google, and you’re looking at your best quarter yet!"
        }]
    ];
    return (
        <Box as="section">
            <Box as="div"
            width="92%"
            maxWidth="var(--content-width)"
            margin="auto">
                <Overview textContent="CRU Hosting provides clients with a secure, reliable and fast server to serve their website to the wide web. The entire infrastructure is tuned specifically for WordPress, so you’ll be able to deliver an amazing digital experience for your customers." />
                <Tile tiles={tiles1} />
                <TitleSection title="Better site performance = better business" paragraph="Your eCommerce site is a vital component of your business. It's CRU' job to make sure that you've got the performance and security features necessary to rank well, load quickly, and earn money!"/>
                <Tile tiles={tiles2} />
                <TitleSection title="CRU’s features &amp; platform" subtitle="Everything you need to grow your eCommerce site with ease!"/>
                <TwoColsImgText headingText = 'We’ll provide you with your perfect plan' contentText="You deserve a plan that works for you, not the other way around. That’s why our plans are designed to work with your needs as they grow and change over time. If this sounds like something you might be interested in hearing more about, reach out to us today!" />
                <TwoColsTextImg headingText="Fast load times &amp; reliable performance" contentText="CRUCache automatically applies WooCommerce exclusions so your site will be super fast while still allowing customers to do normal eCommerce things, like add products to their cart and check out. Beyond our impressive infrastructure, CRUCache is a clever way to provide you with the best of both worlds – speed AND SEO!" />
                <TwoColsImgText headingText="A platform that scales with every sale" contentText="We use our intelligent auto-healing and redundant container technology to ensure that your website is always up, no matter how much traffic it receives. We'll make sure every single page view reaches the end user thanks to our Global CDN--and if something does go wrong with one of those containers? No worries! Our self-repairing service will automatically fix any issues for you so you can stay focused on producing content instead of staying glued to a dashboard all day long." />
                <TwoColsTextImg headingText="Built-in security, for you &amp; your customers" contentText="Our servers are optimised with WordPress to reduce security risks, and we will update versions so you're always running the latest (and most secure) version of WordPress. Additionally, features like automated nightly backups and free SSL certificates that meet PCI standards ensure your eCommerce site is safe from malicious activity." />
                <TwoColsImgText headingText="Focus on your eCommerce store while we focus on your site" contentText="Your WooCommerce shop will be performing at its best, no plugins or configuring required. That’s because CRU's powerful managed hosting platform is powered by the Google Cloud Platform and optimised specifically for WordPress (and eCommerce!)" />
            </Box>
        </Box>
    )
}

export default Hosting;