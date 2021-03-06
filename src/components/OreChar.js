import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'

const useStyles = makeStyles(() => ({
  root: {
    height: '280px',
    padding: '12px 12px',
    backgroundColor: '#ffffff',
    borderRadius: '5px'
  },
  title: {
    fontWeight: 700
  },
  headRow: {
    height: '28px',
    borderBottom: '1px solid #000'
  },
  headCell: {
    fontWeight: 500,
    fontSize: '11px',
    color: 'rgba(0,0,0,0.5)'
  },
  tableRow: {
    height: '28px',
    borderBottom: '1px solid rgba(0,0,0,0.1)'
  },
  listButton: {
    paddingBottom: '10px',
    backgroundColor: '#ffffff',
    fontSize: '16px',
    fontWeight: 700,
    border: 'none',
    outline: 'none',
    cursor: 'pointer'
  },
}))

const characteristics = [
  {
    name: 'ПО',
    data: [63.97, 64.23]
  },
  {
    name: 'Г',
    data: [20, 20]
  },
  {
    name: 'Ю',
    data: [10, 15]
  },
  {
    name: 'З',
    data: [25, 35]
  },
  {
    name: 'С',
    data: [40, 25]
  },
  {
    name: 'Э 48',
    data: [5, 5]
  },
]


export default function OreChar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h2" className={classes.title}>
            Характеристики руды, %
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow className={classes.headRow}>
                  <TableCell></TableCell>
                  <TableCell className={classes.headCell}>текущее</TableCell>
                  <TableCell className={classes.headCell}>через 1 час</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {characteristics.map((row, i) => (
                  <TableRow key={i} className={classes.tableRow}>
                    <TableCell>{row.name}</TableCell>
                    {row.data.map((elem, i) => (
                      <TableCell key={i}>{elem.toString().split('.').join(',')}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell><button className={classes.listButton}>...</button></TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  )
}