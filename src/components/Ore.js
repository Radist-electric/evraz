import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    height: '130px',
    padding: '10px',
    marginBottom: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '5px'
  }
}))

export default function Ore() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <Typography>
            Руда
          </Typography>
        </Grid>
        <Grid item xs={6}>

        </Grid>
      </Grid>
    </div>
  )
}