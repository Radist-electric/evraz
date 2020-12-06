import TabsMenu from './components/TabsMenu'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  const THEME = createMuiTheme({
    typography: {
      "fontFamily": `Rubik, sans-serif`
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            backgroundColor: '#e5e7ec',
          },
        },
      },
      MuiTableCell: {
        root: {
          padding: '2px 10px',
          fontSize: '16px',
          borderBottom: 'none'
        },
        head: {
          fontWeight: 700
        },
        body: {
          fontWeight: 500,
          color: 'rgba(0,0,0,0.5)'
        }
      },
      MuiTableRow: {
        root: {
          height: '40px'
        }
      },
      MuiSelect: {
        root: {
          padding: '0'
        },
        icon: {
          top: '50%',
          transform: 'translateY(-50%)'
        },
        iconOutlined: {
          right: 0
        },
        selectMenu: {
          paddingTop: '7px',
          paddingBottom: '7px',
          paddingLeft: '7px'
        }
      },
      MuiSvgIcon: {
        root: {
          fontSize: '1rem'
        }
      },
      MuiFormLabel: {
        root: {
          fontSize: '12px'
        }
      },
      MuiInputLabel: {
        outlined: {
          transform: 'translate(6px, 9px) scale(1)'
        }
      },
      MuiInputBase: {
        root: {
          fontSize: '0.8em'
        }
      },
      MuiLinearProgress: {
        root: {
          height: '3px',
        },
        colorPrimary: {
          backgroundColor: 'rgba(0,0,0,0.2)'
        },
        barColorPrimary: {
          backgroundColor: 'rgba(0,0,0,0.5)'
        }
      }
    }
  })

  return (
    <MuiThemeProvider theme={THEME}>
      <CssBaseline />
      <TabsMenu />
    </MuiThemeProvider>
  );
}

export default App
