import { Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Typography, Box, Button, createTheme } from "@material-ui/core";
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
            <Grid container spacing={2}>
              {cards.map((card) => (
                <Grid item key={card} xs={4} sm={4} md={3}>
                  <Card
                    sx={{ width: '50%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        pt: '15%',
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
                      <Typography variant="body2">
                        {card.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                    <Button variant="contained" sx={{ px: 2 }} onClick={() => {
                        alert('This will add this selection to the list')
                    }}>Add Option</Button>
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