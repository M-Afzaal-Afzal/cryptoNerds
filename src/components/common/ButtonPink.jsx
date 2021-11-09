import React, {forwardRef} from 'react';
import {Button} from "@mui/material";

const ButtonPink = forwardRef(({children,sx, ...props}, ref) => {
    return (
        <Button
            ref={ref}
            variant={'contained'}
            sx={{
                background: ' linear-gradient(92.78deg, #eb9fef 0%, #03254e 100%)',
                borderRadius: '27px',
                ...sx,
            }}
            {...props}
        >
            {children}
        </Button>
    )
});

export default ButtonPink;