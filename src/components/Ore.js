import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    height: '130px',
    padding: '12px 12px',
    marginBottom: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '5px'
  },
  planDif: {
    display: 'block',
    width: '70px',
    height: '30px',
    marginLeft: 'auto',
    backgroundColor: '#e03049',
    borderRadius: '5px',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: '20px'
  },
  planSetpoint: {
    width: '100%',
    color: '#e03049',
    textAlign: 'right',
    fontSize: '11px'
  },
  planShift: {
    fontSize: '11px',
    fontWeight: 500
  },
  forecast: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: '11px',
    fontWeight: 500,
    color: '#e03049'
  },
  forecastArrow: {
    width: '24px',
    height: '24px',
    fontSize: '24px'
  },
  progressMarker: {
    position: 'relative',
    width: '100%',
    paddingLeft: progress < 5 ? '0%' : progress >= 87 ? '87%' : progress - 5 + '%',
    paddingBottom: '5px',
    fontSize: '11px',
    fontWeight: 500,
    '&::after': {
      content: "''",
      position: 'absolute',
      top: '17px',
      left: progress + '%',
      display: 'block',
      height: '10px',
      width: '1px',
      backgroundColor: 'rgba(0,0,0,0.8)',
    },
  },
}))

const ore = {
  oreHourPlan: 255,
  oreHourCurrent: 250,
  oreShiftPlan: 45900,
  oreShiftCurrent: 31900,
  forecastNumber: 98,
  forecastDir: 1 // 0 - вверх, 1 - вниз
}
const progress = Math.floor(ore.oreShiftCurrent / ore.oreShiftPlan * 100)

export default function Ore() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <Typography style={{ fontWeight: 700 }}>
            Руда
          </Typography>
          <Typography variant="h6" component="span">
            {ore.oreHourCurrent} т/ч
          </Typography>
        </Grid>
        <Grid container item xs={6}>
          <Typography className={classes.planDif}>
            {ore.oreHourCurrent - ore.oreHourPlan}
          </Typography>
          <Typography className={classes.planSetpoint}>
            {ore.oreHourPlan} план час
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: '10px' }}>
          <Typography className={classes.progressMarker} >
            {ore.oreShiftCurrent}
          </Typography>
          <LinearProgress variant="determinate" value={progress} />
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.planShift} >
            {ore.oreShiftPlan} план смены
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.forecast} >
            {ore.forecastDir === 0 && <ArrowDropUpIcon className={classes.forecastArrow} />}
            {ore.forecastDir === 1 && <ArrowDropDownIcon className={classes.forecastArrow} />}
            {ore.forecastNumber}% прогноз
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
// style={{ left: progress+'%' }}