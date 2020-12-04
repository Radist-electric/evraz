import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    height: '280px',
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '5px'
  },
  title: {
    fontWeight: 700
  },
}))



export default function OreChar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h2" className={classes.title}>
            Характеристики руды, %
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}