import React from 'react';
import {Box} from "@mui/material";

const TopDashHeading = ({children}) => {
    return (
        <Box sx={{
            display: 'inline-flex',
            // alignItems: 'center',
            direction: 'column',
            flexDirection: 'column',

        }}>
            {/* Top Dash*/}
            <Box sx={{
                height: '4px',
                borderRadius: '30px',
                // marginLeft: '1rem',
                width: '100px',
                background: (theme) => theme.palette.secondary.main,
            }}/>

            {/* Heading */}

            <Box sx={{
                fontSize: '50px',
                color: '#fff',
            }}>

            {children}
            </Box>

        </Box>
    );
};

export default TopDashHeading;