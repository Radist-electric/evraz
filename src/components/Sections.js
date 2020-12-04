import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#ffffff',
    borderRadius: '5px'
  },
  table: {
    minWidth: 650,
  },
  smallCell: {
    width: '40px'
  },
  selectCell: {
    padding: '0'
  },
  fontBlack: {
    fontWeight: 700
  },
  outRow: {
    backgroundColor: '#f1f4f6'
  },
  markedRow: {
    backgroundColor: '#f9f9fa'
  },
  rowBottom: {
    verticalAlign: "bottom"
  },
  rowTop: {
    verticalAlign: "top"
  },
  rowCenter: {
    verticalAlign: "middle"
  }
}))

function createData1(sections, poor, rich, col_1, col_2, col_3, col_4, col_5, col_6, col_7, col_8, col_9, col_10, col_11, col_12, col_13, col_14, col_15) {
  return { sections, poor, rich, col_1, col_2, col_3, col_4, col_5, col_6, col_7, col_8, col_9, col_10, col_11, col_12, col_13, col_14, col_15 };
}
function createData2(sections, poor, rich, col_1, col_2, col_3, col_4, col_5, col_6, col_7, col_8, col_9, col_10) {
  return { sections, poor, rich, col_1, col_2, col_3, col_4, col_5, col_6, col_7, col_8, col_9, col_10 };
}

const rows1 = [
  createData1('Нагрузки на МСЦ', 193, 193, 193, 193, 193, 193, 197, 197, 197, 205, 197, 197, 197, 197, 197, 197, 197),
  createData1('рекомендация', 193, 193, 193, 193, 193, 193, 197, 197, 197, 194, 197, 197, 197, 197, 197, 197, 197),
  createData1('Руда/вода', 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.86, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85),
  createData1('рекомендация', 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85),
  createData1('Работа доп. МШ', 7, 1, 'Да', '', 'Да', '', 'Да', '', 'Да', '', 'Да', '', 'Да', '', 'Да', '', 'Да'),
  createData1('рекомендация', 6, 1, 'Нет', '', 'Да', '', 'Да', '', 'Да', '', 'Да', '', 'Да', '', 'Да', '', 'Да')
];
const rows2 = [
  createData2('Доп режимы',   '', '', 'Насос 802', 'Да', '', 'Насос 163', 'Нет', '', 'Насос 13', 'Нет', '', 'Насос 105'),
  createData2('рекомендация', '', '',    '',      'Нет', '',     '',      'Нет', '',     '',     'Нет', '',     ''     ),
];

export default function Sections() {
  const classes = useStyles()
  const [pump, setPump] = useState('')

  const handleChange = (event) => {
    setPump(event.target.value);
  }

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="Sections table">
          <TableHead className={classes.outRow}>
            <TableRow>
              <TableCell>Секции</TableCell>
              <TableCell align="center">Бедный</TableCell>
              <TableCell align="center">Богатый</TableCell>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">2</TableCell>
              <TableCell align="center">3</TableCell>
              <TableCell align="center">4</TableCell>
              <TableCell align="center">5</TableCell>
              <TableCell align="center">6</TableCell>
              <TableCell align="center">7</TableCell>
              <TableCell align="center">8</TableCell>
              <TableCell align="center">9</TableCell>
              <TableCell align="center">10</TableCell>
              <TableCell align="center">11</TableCell>
              <TableCell align="center">12</TableCell>
              <TableCell align="center">13</TableCell>
              <TableCell align="center">14</TableCell>
              <TableCell align="center">15</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1.map((row, i) => (
              <TableRow key={i} className={[
                i % 2 === 0 ? classes.rowBottom : classes.rowTop, // у нечётных прижимает текст к низу, у чётных - к верху
                i === 0 || i % 4 === 0 || (i - 1) % 4 === 0 ? classes.markedRow : '' // каждый четвёртый и следующий за них закрашиваем
              ].join(' ')}>
                <TableCell component="th" scope="row" className={i % 2 === 0 ? classes.fontBlack : ''}>
                  {row.sections}
                </TableCell>
                <TableCell align="center">{row.poor}</TableCell>
                <TableCell align="center">{row.rich}</TableCell>
                <TableCell align="center">{row.col_1}</TableCell>
                <TableCell align="center">{row.col_2}</TableCell>
                <TableCell align="center">{row.col_3}</TableCell>
                <TableCell align="center">{row.col_4}</TableCell>
                <TableCell align="center">{row.col_5}</TableCell>
                <TableCell align="center">{row.col_6}</TableCell>
                <TableCell align="center">{row.col_7}</TableCell>
                <TableCell align="center">{row.col_8}</TableCell>
                <TableCell align="center">{row.col_9}</TableCell>
                <TableCell align="center">{row.col_10}</TableCell>
                <TableCell align="center">{row.col_11}</TableCell>
                <TableCell align="center">{row.col_12}</TableCell>
                <TableCell align="center">{row.col_13}</TableCell>
                <TableCell align="center">{row.col_14}</TableCell>
                <TableCell align="center">{row.col_15}</TableCell>
              </TableRow>
            ))}
            {rows2.map((row, i) => (
              <TableRow key={i} className={i % 2 === 0 ? classes.rowBottom : classes.rowTop}>
                <TableCell component="th" scope="row" className={i % 2 === 0 ? classes.fontBlack : ''}>
                  {row.sections}
                </TableCell>
                <TableCell align="center">{row.poor}</TableCell>
                <TableCell align="center">{row.rich}</TableCell>
                {i===0 && <TableCell colSpan={2} rowSpan={2} className={[classes.rowCenter, classes.fontBlack].join(' ')} align="center">{row.col_1}</TableCell>}
                <TableCell align="center">{row.col_2}</TableCell>
                <TableCell align="center">{row.col_3}</TableCell>
                {i===0 && <TableCell colSpan={2} rowSpan={2} className={[classes.rowCenter, classes.fontBlack].join(' ')} align="center">{row.col_4}</TableCell>}
                <TableCell align="center">{row.col_5}</TableCell>
                <TableCell align="center">{row.col_6}</TableCell>
                {i===0 && <TableCell colSpan={2} rowSpan={2} className={[classes.rowCenter, classes.fontBlack].join(' ')}>{row.col_7}</TableCell>}
                <TableCell align="center">{row.col_8}</TableCell>
                <TableCell align="center">{row.col_9}</TableCell>
                {i===0 && <TableCell colSpan={2} rowSpan={2} className={[classes.rowCenter, classes.fontBlack].join(' ')} align="center">{row.col_10}</TableCell>}
                {i===0 && <TableCell colSpan={2} rowSpan={2} className={[classes.rowCenter, classes.selectCell].join(' ')} align="center">
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Насос</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={pump}
                      onChange={handleChange}
                      label="Насос"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>на 3-97</MenuItem>
                      <MenuItem value={20}>на 3-98</MenuItem>
                      <MenuItem value={30}>на 3-99</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table className={classes.table} aria-label="Sections table footer">
          <TableBody>
            <TableRow className={classes.outRow}>
              <TableCell className={[classes.smallCell, classes.fontBlack].join(' ')}>10:15</TableCell>
              <TableCell align="left" className={classes.fontBlack}>Рекомендация обновлена</TableCell>
              <TableCell></TableCell>
              <TableCell align="right" className={classes.fontBlack}>Посмотреть историю</TableCell>
              <TableCell className={[classes.smallCell, classes.fontBlack].join(' ')} align="center"><span>&gt;</span></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
