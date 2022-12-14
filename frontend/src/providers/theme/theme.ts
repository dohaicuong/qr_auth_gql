import { createTheme } from '@mui/material'

const defaultTheme = createTheme()

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#5865F2' },
    secondary: { main: 'hsl(139, 47.3%, 43.9%)' }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            '-webkit-box-shadow': '0 0 0 100px #000 inset',
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          cursor: 'pointer',
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          color: defaultTheme.palette.grey[500],
        },
        subtitle2: {
          color: defaultTheme.palette.grey[500],
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          minWidth: 500
        }
      }
    }
  },
})
