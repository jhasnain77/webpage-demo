import { List, ListItem, Typography, Box, CardMedia, Button } from "@material-ui/core";

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
          <Box sx={{ px: 1, py: 1, width: 500, height: 120, backgroundColor: "#d9d9d9", borderRadius: "4px" }}>
            <Typography variant="h6">
              {choice.option}
            </Typography>
            <Typography variant="body1">
              ${choice.price.toFixed(2)}
            </Typography>
            <Button variant="contained">
              Remove
            </Button>
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