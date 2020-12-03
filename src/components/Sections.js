import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

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
  }
}))

function createData1(sections, poor, rich, col_1, col_2, col_3, col_4, col_5, col_6, col_7, col_8, col_9, col_10, col_11, col_12, col_13, col_14, col_15) {
  return { sections, poor, rich, col_1, col_2, col_3, col_4, col_5, col_6, col_7, col_8, col_9, col_10, col_11, col_12, col_13, col_14, col_15 };
}
function createData2(sections, poor, rich, col_1, col_2, col_3, col_4, col_5, col_6, col_7, col_8, col_9, col_10, col_11) {
  return { sections, poor, rich, col_1, col_2, col_3, col_4, col_5, col_6, col_7, col_8, col_9, col_10, col_11 };
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
  createData2('Доп режимы', '', '', 'Насос 802', 'Да', '', 'Насос 163', 'Нет', '', 'Насос 13', 'Нет', '', 'Насос 105'),
  createData2('рекомендация', '', '', '', 'Нет', '', '', 'Нет', '', '', 'Нет', '', ''),
];

export default function Sections() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="Sections table">
          <TableHead className={classes.outRow}>
            <TableRow>
              <TableCell>Секции</TableCell>
              <TableCell>Бедный</TableCell>
              <TableCell>Богатый</TableCell>
              <TableCell>1</TableCell>
              <TableCell>2</TableCell>
              <TableCell>3</TableCell>
              <TableCell>4</TableCell>
              <TableCell>5</TableCell>
              <TableCell>6</TableCell>
              <TableCell>7</TableCell>
              <TableCell>8</TableCell>
              <TableCell>9</TableCell>
              <TableCell>10</TableCell>
              <TableCell>11</TableCell>
              <TableCell>12</TableCell>
              <TableCell>13</TableCell>
              <TableCell>14</TableCell>
              <TableCell>15</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1.map((row, i) => (
              // <TableRow key={i} className={i % 2 === 0 ? classes.rowBottom : classes.rowTop} className={classes.markedRow}>
              <TableRow key={i} className={[
                i % 2 === 0 ? classes.rowBottom : classes.rowTop,
                i === 0 || i % 4 === 0 || (i - 1) % 4 === 0 ? classes.markedRow : ''
              ].join(' ')}>
                <TableCell component="th" scope="row" className={i % 2 === 0 ? classes.fontBlack : ''}>
                  {row.sections}
                </TableCell>
                <TableCell>{row.poor}</TableCell>
                <TableCell>{row.rich}</TableCell>
                <TableCell>{row.col_1}</TableCell>
                <TableCell>{row.col_2}</TableCell>
                <TableCell>{row.col_3}</TableCell>
                <TableCell>{row.col_4}</TableCell>
                <TableCell>{row.col_5}</TableCell>
                <TableCell>{row.col_6}</TableCell>
                <TableCell>{row.col_7}</TableCell>
                <TableCell>{row.col_8}</TableCell>
                <TableCell>{row.col_9}</TableCell>
                <TableCell>{row.col_10}</TableCell>
                <TableCell>{row.col_11}</TableCell>
                <TableCell>{row.col_12}</TableCell>
                <TableCell>{row.col_13}</TableCell>
                <TableCell>{row.col_14}</TableCell>
                <TableCell>{row.col_15}</TableCell>
              </TableRow>
            ))}
            {rows2.map((row, i) => (
              <TableRow key={i} className={i % 2 === 0 ? classes.rowBottom : classes.rowTop}>
                <TableCell component="th" scope="row" className={i % 2 === 0 ? classes.fontBlack : ''}>
                  {row.sections}
                </TableCell>
                <TableCell>{row.poor}</TableCell>
                <TableCell>{row.rich}</TableCell>
                <TableCell colSpan={2}>{row.col_1}</TableCell>
                <TableCell>{row.col_2}</TableCell>
                <TableCell>{row.col_3}</TableCell>
                <TableCell colSpan={2}>{row.col_4}</TableCell>
                <TableCell>{row.col_5}</TableCell>
                <TableCell>{row.col_6}</TableCell>
                <TableCell colSpan={2}>{row.col_7}</TableCell>
                <TableCell>{row.col_8}</TableCell>
                <TableCell>{row.col_9}</TableCell>
                <TableCell colSpan={2}>{row.col_10}</TableCell>
                <TableCell padding="none">на 3-97</TableCell>
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
