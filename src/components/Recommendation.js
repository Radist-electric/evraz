import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#ffffff'
  }
}))

export default function Recommendation() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container alignItems="center">
        <h1>Recommendation</h1>
      </Grid>
    </Container>
  )
}
