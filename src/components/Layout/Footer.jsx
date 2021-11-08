import React from 'react';
import {Box} from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{
            background: (theme) => theme.palette.primary.main,
            height: '100px',
            width: '100%',
        }}>
            Footer
        </Box>
    );
};

export default Footer;