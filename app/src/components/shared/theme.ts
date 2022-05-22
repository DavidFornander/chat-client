import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#FFFFFF',
            contrastText: '#000000'
        },
    }
})