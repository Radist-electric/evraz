import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Clock from './Clock'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    height: '130px',
    padding: '10px 15px',
    backgroundColor: '#ffffff',
    borderRadius: '5px'
  },
  rootNote: {
    height: '130px',
    padding: '10px 15px',
    backgroundColor: '#f8e4e6',
    borderRadius: '5px'
  },
  symbol: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '22px',
    width: '22px',
    // border: 'none',
    borderRadius: '50%',
    backgroundColor: '#e03049',
    color: '#ffffff',
    fontWeight: 700
  },
  message: {
    margin: '10px 0'
  },
  button: {
    height: '30px',
    width: '100px',
    borderRadius: '5px',
    border: '1px solid rgba(0,0,0,0.5)',
    fontSize: '11px',
    cursor: 'pointer'
  },
}))

const message = "Поступила новая рекомендация"



export default function Notification() {
  const classes = useStyles()
  const [isNote, setIsNote] = useState(true)

  const confirmMessage = () => {
    setIsNote(false)
  }

  return (
    <div className={isNote ? classes.rootNote : classes.root}>
      <Grid container>
        {!isNote &&
          <Grid item xs={12}>
            <Typography>Уведомления</Typography>
          </Grid>}
        {isNote &&
          <>
            <Grid item xs={2}>
              <Typography className={classes.symbol}>!</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>Уведомление</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography><Clock /></Typography>
            </Grid>
            <Grid item xs={12} className={classes.message}>
              <Typography>{message}</Typography>
            </Grid>
            <Grid container item xs={12} className={classes.message} justify="flex-end">
              <button className={classes.button} onClick={confirmMessage}>OK</button>
            </Grid>
          </>
        }
      </Grid>
    </div>
  )
}