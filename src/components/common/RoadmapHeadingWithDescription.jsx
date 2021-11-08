import React from 'react';
import {Box, Typography} from "@mui/material";

const RoadmapHeadingWithDescription = ({heading,description}) => {
    return (
        <Box width={'100%'} sx={{
            py: '2rem',
            px: {
                xs: '.5rem',
                sm: '1rem',
                md: '1.5rem',
                lg: '2rem',
            },
        }}>
            {/*<Image src={'/10.png'} width={258} height={133}/>*/}
            <Typography sx={{
                textAlign: 'left',
                fontSize: '80px',
                color: 'transparent',
                '-webkit-text-stroke-width': '2px',
                '-webkit-text-stroke-color': 'white',
                fontWeight: 'bold',
            }} variant={'h3'}>
                {heading}
            </Typography>

            <Box sx={{
                py: '',
                background: 'linear-gradient(92.78deg, #eb9fef 0%, #03254e 100%)',
                borderRadius: '31px',
                // height: '177px',
                color: '#fff',
                fontSize: '18px',
                padding: '2rem 2rem',
                textAlign: 'left',
            }}>
                {description}
            </Box>

        </Box>
    );
};

export default RoadmapHeadingWithDescription;