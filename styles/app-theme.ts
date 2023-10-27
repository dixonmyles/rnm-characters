import { cyan, green } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const rickAndMortyTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: cyan[300],
    },
  },
});
