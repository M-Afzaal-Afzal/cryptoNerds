import React from 'react';
import {Button} from "@mui/material";

const DrawerOutlinedButton = React.forwardRef(({children,...props},ref) => {
    return (
        <Button ref={ref} size={'large'} fullWidth {...props}>
            {children}
        </Button>
    );
});

export default DrawerOutlinedButton;