import { List, ListItem, Typography, Box, Button, Grid } from "@material-ui/core";

const choices = require("./Choices.json");

export default function Selections() {

  return(
    <List>
      <ListItem>
        <Typography variant="h4">
          Your Selections
        </Typography>
      </ListItem>
      {choices.map((choice) => (
        <ListItem key={choice}>
          <Box sx={{ px: 1, py: 1, width: "200%", height: 80, backgroundColor: "#d9d9d9", borderRadius: "4px" }}>
            <Grid container spacing={4}>
              <Grid item>
                <Typography variant="h6">
                  {choice.option}
                </Typography>
                <Typography variant="body1">
                  ${choice.price.toFixed(2)}
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="outlined" onClick={() => {
                  alert('This will remove the item from the selections')
                }}>
                  Remove Option
                </Button>
              </Grid>
            </Grid>
          </Box>
        </ListItem>
      ))}
      <ListItem>
        <Typography variant="h4">
          Total: $10.00
        </Typography>
      </ListItem>
    </List>
  )

}