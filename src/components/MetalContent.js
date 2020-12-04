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
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '5px'
  },
  title: {
    fontWeight: 700
  },
  select: {
    width: '130px'
  }
}))

export default function MetalContent() {
  const classes = useStyles()
  const [pump, setPump] = useState('')

  const handleChange = (event) => {
    setPump(event.target.value)
  }

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
      </Grid>
    </div>
  )
}