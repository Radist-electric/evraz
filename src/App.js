import TabsMenu from './components/TabsMenu'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

function App() {
  const THEME = createMuiTheme({
    typography: {
      "fontFamily": `"FranklinGothic", "Helvetica", "Arial", sans-serif`
    }
  })

  return (
    <MuiThemeProvider theme={THEME}>
      <TabsMenu />
    </MuiThemeProvider>
  );
}

export default App
