import { Grid } from "@mui/material"

const ImageCard = ({ info1, info2 }) => {
  return (
    <Grid
      container
      sx={{ m: 0, p: 0, width: "100%", height: "20vw" }}
      display="flex"
      direction="row"
      alignItems="left"
      justifyContent="space-between"
      rowSpacing={0}
    >
      <Grid item sx={{ width: "46%", height: "100%", boxShadow: 0, ml: "4%" }}>
        <img src={info1} style={{ width: "100%", objectFit: "contain" }} />
      </Grid>
      <Grid item sx={{ width: "46%", height: "100%", boxShadow: 0, mr: "4%" }}>
        <img src={info2} style={{ width: "100%", objectFit: "contain" }} />
      </Grid>
    </Grid>
  )
}

export default ImageCard
