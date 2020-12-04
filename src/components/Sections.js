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
import Clock from './Clock'

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
    fontWeight: 700,
    color: 'rgba(0,0,0,0.8)'
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
  },
  historyButton: {
    height: '22px',
    borderRadius: "50%",
    backgroundColor: '#ffffff',
    outline: 'none',
    border: '1px solid rgba(0,0,0,0.6)',
    cursor: 'pointer'
  }
}))

function createData1(sections, poor, rich, col_1, col_2, col_3, col_4, col_5, col_6, col_7, col_8, col_9, col_10, col_11, col_12, col_13, col_14, col_15) {
  return { sections, poor, rich, col_1, col_2, col_3, col_4, col_5, col_6, col_7, col_8, col_9, col_10, col_11, col_12, col_13, col_14, col_15 };
}
function createData2(sections, poor, rich, col_1, col_2, col_3, col_4, col_5, col_6, col_7, col_8, col_9, col_10) {
  return { sections, poor, rich, col_1, col_2, col_3, col_4, col_5, col_6, col_7, col_8, col_9, col_10 };
}
function createStyle1(data) {
  let arr = []
  for (let i = 0; i < data.length; i++) {
    let obj = {}
    // Собираем в объект инлайновые стили
    let style = data[i]
    for (let j = 0; j < 3; j++) {
      if (j === 0) {
        if (+style[j] === 1) {
          obj.backgroundColor = '#e0effb' // Голубой
        } else if (+style[j] === 2) {
          obj.backgroundColor = '#f8e4e6' // Розовый
        }
      }
      if (j === 1) {
        if (+style[j] === 1) {
          obj.fontWeight = 700
          obj.color = 'rgba(0,0,0,0.8)'
        } else if (+style[j] === 2) {
          obj.fontWeight = 700
          obj.color = '#e03049' // Красный
        }
      }
      if (j === 2) {
        if (+style[j] === 1) {
          obj.borderTop = '3px solid #e03049' // Красный
        } else if (+style[j] === 2) {
          obj.borderBottom = '3px solid #099a71' // Зелёный
        }
      }
    }
    if (Object.keys(obj).length === 0) {
      arr.push(0)
    } else {
      arr.push(obj)
    }

  }
  return arr
}

const rows1 = [
  createData1('Нагрузки на МСЦ', 193, 193, 193, 193, 193, 193, 197, 197, 197, 205, 197, 197, 197, 197, 197, 197, 197),
  createData1('рекомендация', 193, 193, 193, 193, 193, 193, 197, 197, 197, 194, 197, 197, 197, 197, 197, 197, 197),
  createData1('Руда/вода', 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.86, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85),
  createData1('рекомендация', 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85),
  createData1('Работа доп. МШ', 7, 1, 'Да', '', 'Да', '', 'Да', '', 'Да', '', 'Да', '', 'Да', '', 'Да', '', 'Да'),
  createData1('рекомендация', 6, 1, 'Нет', '', 'Да', '', 'Да', '', 'Да', '', 'Да', '', 'Да', '', 'Да', '', 'Да')
]

/**
 * Стили для ячеек таблицы слева направо
 * Фон: 0 - без фона, 1 - голубой фон, 2 - розовый фон
 * Цвет текста: 0 - текущий, 1 - жирный, 2 - красный
 * Линия: 0 - без линий, 1 - верхняя красная, 2 - нижняя зелёная
 */
const styles1 = [
  createStyle1(['000', '000', '100', '000', '000', '100', '100', '000', '000', '100', '220', '000', '000', '000', '000', '000', '000', '000']),
  createStyle1(['000', '000', '100', '000', '000', '100', '100', '000', '000', '100', '010', '000', '000', '000', '000', '000', '000', '000']),
  createStyle1(['000', '000', '100', '000', '000', '120', '100', '000', '000', '220', '000', '000', '000', '000', '000', '000', '000', '000']),
  createStyle1(['000', '000', '100', '000', '000', '110', '100', '000', '000', '110', '000', '000', '000', '000', '000', '000', '000', '000']),
  createStyle1(['000', '221', '100', '221', '000', '100', '100', '000', '000', '100', '000', '000', '000', '000', '000', '000', '000', '000']),
  createStyle1(['000', '012', '100', '012', '000', '100', '100', '000', '000', '100', '000', '000', '000', '000', '000', '000', '000', '000'])
]

const rows2 = [
  createData2('Доп режимы', '', '', 'Насос 802', 'Да', '', 'Насос 163', 'Нет', '', 'Насос 13', 'Нет', '', 'Насос 105'),
  createData2('рекомендация', '', '', '', 'Нет', '', '', 'Нет', '', '', 'Нет', '', ''),
]

export default function Sections() {
  const classes = useStyles()
  const [pump, setPump] = useState('')

  const handleChange = (event) => {
    setPump(event.target.value)
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
                <TableCell component="th" scope="row" className={i % 2 === 0 ? classes.fontBlack : ''} style={styles1[i][0] === 0 ? null : styles1[i][0]}>
                  {row.sections}
                </TableCell>
                <TableCell align="center" style={styles1[i][1] === 0 ? null : styles1[i][1]}>{row.poor}</TableCell>
                <TableCell align="center" style={styles1[i][2] === 0 ? null : styles1[i][2]}>{row.rich}</TableCell>
                <TableCell align="center" style={styles1[i][3] === 0 ? null : styles1[i][3]}>{row.col_1}</TableCell>
                <TableCell align="center" style={styles1[i][4] === 0 ? null : styles1[i][4]}>{row.col_2}</TableCell>
                <TableCell align="center" style={styles1[i][5] === 0 ? null : styles1[i][5]}>{row.col_3}</TableCell>
                <TableCell align="center" style={styles1[i][6] === 0 ? null : styles1[i][6]}>{row.col_4}</TableCell>
                <TableCell align="center" style={styles1[i][7] === 0 ? null : styles1[i][7]}>{row.col_5}</TableCell>
                <TableCell align="center" style={styles1[i][8] === 0 ? null : styles1[i][8]}>{row.col_6}</TableCell>
                <TableCell align="center" style={styles1[i][9] === 0 ? null : styles1[i][9]}>{row.col_7}</TableCell>
                <TableCell align="center" style={styles1[i][10] === 0 ? null : styles1[i][10]}>{row.col_8}</TableCell>
                <TableCell align="center" style={styles1[i][11] === 0 ? null : styles1[i][11]}>{row.col_9}</TableCell>
                <TableCell align="center" style={styles1[i][12] === 0 ? null : styles1[i][12]}>{row.col_10}</TableCell>
                <TableCell align="center" style={styles1[i][13] === 0 ? null : styles1[i][13]}>{row.col_11}</TableCell>
                <TableCell align="center" style={styles1[i][14] === 0 ? null : styles1[i][14]}>{row.col_12}</TableCell>
                <TableCell align="center" style={styles1[i][15] === 0 ? null : styles1[i][15]}>{row.col_13}</TableCell>
                <TableCell align="center" style={styles1[i][16] === 0 ? null : styles1[i][16]}>{row.col_14}</TableCell>
                <TableCell align="center" style={styles1[i][17] === 0 ? null : styles1[i][17]}>{row.col_15}</TableCell>
              </TableRow>
            ))}
            {rows2.map((row, i) => (
              <TableRow key={i} className={i % 2 === 0 ? classes.rowBottom : classes.rowTop}>
                <TableCell component="th" scope="row" className={i % 2 === 0 ? classes.fontBlack : ''}>
                  {row.sections}
                </TableCell>
                <TableCell align="center">{row.poor}</TableCell>
                <TableCell align="center">{row.rich}</TableCell>
                {i === 0 && <TableCell colSpan={2} rowSpan={2} className={[classes.rowCenter, classes.fontBlack].join(' ')} align="center">{row.col_1}</TableCell>}
                <TableCell align="center">{row.col_2}</TableCell>
                <TableCell align="center">{row.col_3}</TableCell>
                {i === 0 && <TableCell colSpan={2} rowSpan={2} className={[classes.rowCenter, classes.fontBlack].join(' ')} align="center">{row.col_4}</TableCell>}
                <TableCell align="center">{row.col_5}</TableCell>
                <TableCell align="center">{row.col_6}</TableCell>
                {i === 0 && <TableCell colSpan={2} rowSpan={2} className={[classes.rowCenter, classes.fontBlack].join(' ')}>{row.col_7}</TableCell>}
                <TableCell align="center">{row.col_8}</TableCell>
                <TableCell align="center">{row.col_9}</TableCell>
                {i === 0 && <TableCell colSpan={2} rowSpan={2} className={[classes.rowCenter, classes.fontBlack].join(' ')} align="center">{row.col_10}</TableCell>}
                {i === 0 && <TableCell colSpan={2} rowSpan={2} className={[classes.rowCenter, classes.selectCell].join(' ')} align="center">
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
              <TableCell className={[classes.smallCell, classes.fontBlack].join(' ')}><Clock/></TableCell>
              <TableCell align="left" className={classes.fontBlack}>Рекомендация обновлена</TableCell>
              <TableCell></TableCell>
              <TableCell align="right" className={classes.fontBlack}>Посмотреть историю</TableCell>
              <TableCell className={[classes.smallCell, classes.fontBlack].join(' ')} align="center"><button className={classes.historyButton}>&gt;</button></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
