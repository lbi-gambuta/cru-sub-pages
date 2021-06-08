import React from 'react'
import { Grid, GridItem } from "@chakra-ui/react"

const GridLayout = () => {
    return (
        <Grid templateColumns={{ xl:"repeat(5, 1fr)", md:"50% 50%" }}>
            <GridItem w="100%" h="150px" colSpan={{md:2}} border="1px solid var(--chakra-colors-primary-300)" bg="primary.500" />
            <GridItem w="100%" h="150px" border="1px solid var(--chakra-colors-primary-300)" bg="primary.500" />
            <GridItem w="100%" h="150px" border="1px solid var(--chakra-colors-primary-300)" bg="primary.500" />
            <GridItem w="100%" h="150px" border="1px solid var(--chakra-colors-primary-300)" bg="primary.500" />
            <GridItem w="100%" h="150px" border="1px solid var(--chakra-colors-primary-300)" bg="primary.500" />
        </Grid>
    )
}

export default GridLayout;