import { Grid } from "@mui/material"
import Home from "./pages/Home"
import "./App.css"

const App = () => {

  return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12}><Home/></Grid>
        </Grid>
  );
};


export default App
