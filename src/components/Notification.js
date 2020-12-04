import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    height: '130px',
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '5px'
  }
}))

export default function Notification() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography>
            Уведомление
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}