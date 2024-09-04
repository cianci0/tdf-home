import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Grid, ThemeProvider, createMuiTheme } from "@mui/material"
import Home from "./pages/Home"
import "./App.css"

const App = () => {

  return (
      <BrowserRouter>
        <Grid container justifyContent="center" alignItems="center">
          <Routes>
            <Route path="/" element={<Grid item xs={12}><Home /></Grid>} />
          </Routes>
        </Grid>
      </BrowserRouter>
  );
};


export default App
