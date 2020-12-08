import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Sections from './Sections'
import MetalContent from './MetalContent'
import OreChar from './OreChar'
import Ore from './Ore'
import Notification from './Notification'

export default function Recommendation({showHistory}) {

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Sections showHistory={showHistory}/>
        </Grid>
        <Grid item xs={6}>
          <MetalContent />
        </Grid>
        <Grid item xs={3}>
          <OreChar />
        </Grid>
        <Grid item xs={3}>
          <Ore />
          <Notification/>
        </Grid>
      </Grid>
    </Container>
  )
}
