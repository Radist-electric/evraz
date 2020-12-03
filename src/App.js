import TabsMenu from './components/TabsMenu'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  const THEME = createMuiTheme({
    typography: {
      "fontFamily": `Rubik, sans-serif`
    },
    overrides: {
      MuiTableCell: {
        root: {
          padding: '2px 10px',
          fontSize: '16px',
          borderBottom: 'none'
        },
        head: {
          fontWeight: 700
        }
      },
      MuiTableRow: {
        root: {
          height: '40px'
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
