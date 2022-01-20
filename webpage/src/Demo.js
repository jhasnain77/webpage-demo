import { AppBar, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Toolbar, Typography, Box, Button, createTheme, Link } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
  
  const cards = require('./Cards.json');
  
  const theme = createTheme();

export default function Demo() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Box
            sx={{
              pt: 1,
              pb: 1,
            }}
          >
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={3} sm={3} md={3}>
                  <Card
                    sx={{ height: '50%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        pt: '25%',
                      }}
                      image="https://dummyimage.com/150x150/000/fff"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.option}
                      </Typography>
                      <Typography variant="h6">
                          {card.price.toFixed(2)}
                      </Typography>
                      <Typography>
                        {card.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                    <Button variant="contained">Add Option</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    );
  }