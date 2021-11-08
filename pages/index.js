import * as React from 'react';

import Box from '@mui/material/Box';
import HeroSection from "../src/components/Home/HeroSection";
import OverviewSection from "../src/components/Home/OverviewSection";
import RoadmapSection from "../src/components/Home/RoadmapSection";
import FaqSection from "../src/components/Home/FaqSection";

const Index = () => {
    return (

        <Box>
            <HeroSection/>
            <OverviewSection/>
            <RoadmapSection/>
            <FaqSection/>
        </Box>
    );
}

export default Index;