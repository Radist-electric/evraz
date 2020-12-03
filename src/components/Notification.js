import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#ffffff',
    borderRadius: '5px'
  }
}))

export default function Notification() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <p>Notification</p>
    </div>
  )
}