import { createTheme, ThemeOptions } from '@mui/material';

export const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: '#46d7b3',
    },
    secondary: {
      main: '#2c2d2c',
      dark: '#1a1a1a',
    },
    text: {
      primary: '#fff',
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
        },
      },
    },
  },
});
