import './App.css';
import { Grid, AppBar, Typography, Box, Toolbar, Container, List } from '@material-ui/core';
import Demo from './Demo';
import Selections from './Selections';

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#2E3B55' }}>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Scelta Demo Webpage
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container>
        <Grid item>
          <Demo />
        </Grid>
        <Grid item>
          <Selections />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
