import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 480,
      lg: 768,
      xl: 1080,
      'xxl': 1250,
    }
  },
  palette: {
    primary: {
      main: '#03254e',
    },
    secondary: {
      main: '#eb9fef',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
