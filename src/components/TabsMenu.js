import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Logo from '../img/logo.svg'
import History from './History'
import Recommendation from './Recommendation'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          {children}
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: '#ffffff',
    color: '#4e5251'
  },
  logo: {
    height: '30px',
    width: '100px'
  },
  tab: {
    fontWeight: 700,
    opacity: 1
  },
  indicator: {
    height: '3px',
    backgroundColor: '#f37a13',
  }
}))

export default function TabsMenu() {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const showHistory = () => {
    setValue(1)
  }

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Container maxWidth="lg">
          <Grid container alignItems="center">
            <Grid item md={2} sm={3} xs={12}>
              <img className={classes.logo} src={Logo} alt="logo"></img>
            </Grid>
            <Grid item md={10} sm={9} xs={12}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="EVRAZ tabs"
                classes={{
                  indicator: classes.indicator
                }}
              >
                <Tab label="Рекомендации" {...a11yProps(0)} className={classes.tab} />
                <Tab label="История" {...a11yProps(1)} className={classes.tab} />
              </Tabs>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Recommendation showHistory={showHistory}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <History/>
      </TabPanel>
    </>
  )
}
