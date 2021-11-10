import React from 'react';
import {Box, Button} from "@mui/material";

const DrawerOutlinedButton = React.forwardRef(({children,...props},ref) => {
    return (
        <Box sx={{
            width: '100%',
            cursor: 'pointer',
            padding: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }} ref={ref} size={'large'} fullWidth {...props}>
            {children}
        </Box>
    );
});

export default DrawerOutlinedButton;