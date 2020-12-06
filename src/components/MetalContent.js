import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

const useStyles = makeStyles(() => ({
  root: {
    height: '280px',
    padding: '20px 20px',
    backgroundColor: '#ffffff',
    borderRadius: '5px'
  },
  title: {
    fontWeight: 700
  },
  select: {
    width: '130px'
  },
  largeText: {
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '1',
    color: '#099a71'
  },
  smallText: {
    fontWeight: 500,
    fontSize: '11px',
    color: 'rgba(0,0,0,0.5)'
  },
  curveWrap: {
    position: 'relative',
    height: '150px',
    width: '580px',
    marginTop: '5px',
    border: '1px solid rgba(0,0,0,0.2)',
    borderRadius: '5px'
  },
  curveAxis: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    height: curveHeight + 'px',
    width: curveWidth + curveOffsetLeft + curveOffsetRight + 'px',
    borderLeft: '1px solid rgba(0,0,0,0.2)',
    borderBottom: '1px solid rgba(0,0,0,0.2)',
  },
  axis: {
    position: 'absolute',
    top: '50%',
    left: '0',
    height: '1px',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  axisX: {
    position: 'absolute',
    bottom: '-20px',
    left: '0',
    display: 'flex',
    justifyContent: 'space-between',
    height: '18px',
    width: '100%',
    paddingLeft: curveOffsetLeft + 'px',
    paddingRight: curveOffsetRight + 'px'
  },
  axisY: {
    position: 'absolute',
    top: '0',
    left: '-27px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '120px',
    width: '27px'
  },
  point: {
    position: 'absolute',
    height: '8px',
    width: '8px',
    backgroundColor: '#099a71',
    borderRadius: '50%'
  },
  axisValue: {
    fontWeight: 500,
    fontSize: '10px',
    color: 'rgba(0,0,0,0.5)'
  },
}))

const concentrate = {
  hour: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  value: [61.55, 61.60, 61.55, 61.53, 61.30, 61.35, 61.44, 61.41, 61.60, 61.46, 61.42, 61.45],
  average: 61.45
}
const curveHeight = 120
const curveWidth = 517
const curveOffsetLeft = 10
const curveOffsetRight = 10
const curveStep = curveWidth / 11
const curveMiddle = 61.44
const curveMax = 61.84


export default function MetalContent() {
  const classes = useStyles()
  const [pump, setPump] = useState('')

  const handleChange = (event) => {
    setPump(event.target.value)
  }

  const getString = num => num.toString().split('.').join(',')

  const getCoordY = y => {
    // Преобразуем содержание металла в координату Y (начало координаты от верха)
    return +((curveMax - y) / (curveMax - curveMiddle) * (curveHeight / 2)).toFixed(2)
  }

  const getPath = (height, step, offset, arr) => {
    // Собираем путь для SVG графика, используя кривые Безье
    let path = `M0 ${(height / 2).toFixed(2)}`,
      nextStep = step,
      prevValue = 0,
      middlePointX,
      middlePointY,
      kInc = 1.4, // Корретирующий коэффициент, увеличивающий изгиб нарастающей функции
      kDec = 0.6 // Корретирующий коэффициент, увеличивающий изгиб спадающей функции
    arr.forEach((value, i) => {
      if (i === 0) {
        // middle1 = x1 + (x2-x1)/3   = (2/3)*x1 + x2/3
        // middle2 = x1 + (x2-x1)*2/3 = x1/3 + (2/3)*x2
        let x1 = height / 2,
            x2 = getCoordY(value)
        path += ` C ${(offset/3).toFixed(2)} ${(2/3)*x1 + x2/3} ${(offset*2/3).toFixed(2)} ${x1/3 + (2/3)*x2} ${offset} ${getCoordY(value)}`
        nextStep += offset
      } else {
        middlePointX = (2*nextStep - step) / 2 // Ищу среднюю точку между координатами соседних точек
        if (value >= prevValue) {
          middlePointY = prevValue + ((value - prevValue)*2/3)*kInc
        } else if (value < prevValue) {
          middlePointY = value + ((prevValue - value)/3)*kDec
        }
        path += ` S ${middlePointX} ${getCoordY(middlePointY)}, ${nextStep} ${getCoordY(value)},`
        nextStep += step
      }
      prevValue = value

    })
    return path
  }

  const path = getPath(curveHeight, curveStep, curveOffsetLeft, concentrate.value)

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography component="h2" className={classes.title}>
            Содержание металла в концентрате, %
          </Typography>
        </Grid>
        <Grid container item xs={4} justify='flex-end'>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="select-outlined-label">Содерж.</InputLabel>
            <Select
              labelId="select-outlined-label"
              id="select-outlined"
              value={pump}
              onChange={handleChange}
              label="Содержание"
              className={classes.select}
            >
              <MenuItem value={1}>Fe (общ.)</MenuItem>
              <MenuItem value={2}>Fe (ср.)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.largeText}>{getString(concentrate.value[8])}</Typography>
          <Typography component="span" className={classes.smallText}>факт {concentrate.hour[8]}:00</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.largeText}>{getString(concentrate.value[9])}</Typography>
          <Typography component="span" className={classes.smallText}>прогноз {concentrate.hour[9]}:00</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.largeText}>{getString(concentrate.value[10])}</Typography>
          <Typography component="span" className={classes.smallText}>прогноз {concentrate.hour[10]}:00</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.largeText}>{getString(concentrate.value[11])}</Typography>
          <Typography component="span" className={classes.smallText}>прогноз {concentrate.hour[11]}:00</Typography>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={3} style={{ paddingLeft: '30px' }}>
          <Typography className={classes.largeText}>{getString(concentrate.average)}</Typography>
          <Typography component="span" className={classes.smallText}>среднее за смену</Typography>
        </Grid>
        <div className={classes.curveWrap}>
          <div className={classes.curveAxis}>
            <div className={classes.axis}></div>
            <div className={classes.axisY}>
              <Typography component="span" className={classes.axisValue}>61,84</Typography>
              <Typography component="span" className={classes.axisValue}>61,44</Typography>
              <Typography component="span" className={classes.axisValue}>0</Typography>
            </div>
            <div className={classes.axisX}>
              {concentrate.hour.map((item, i) => (
                <Typography component="span" className={classes.axisValue} key={i}>{item}</Typography>
              ))}
            </div>
            <div className={classes.curve}>
              <svg width={curveWidth + curveOffsetLeft + curveOffsetRight} height={curveHeight}>
                <path d={path} stroke="black" fill="transparent" />
              </svg>
            </div>
            {concentrate.value.map((value, i) => (
              <div className={classes.point} style={{ top: +getCoordY(value), left: curveOffsetLeft + curveStep * i }} key={i}></div>
            ))}
          </div>
        </div>
      </Grid>
    </div>
  )
}