import { Grid } from "@mui/material"
import { motion } from "framer-motion"

const ImageCard = ({ info1, info2 }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        duration: 0.7,
        staggerDirection: -1,
      },
    },
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <Grid
        container
        sx={{ m: 0, p: 0, width: "100%", height: "20vw" }}
        display="flex"
        direction="row"
        alignItems="left"
        justifyContent="space-around"
        rowSpacing={0}
      >
        <Grid
          item
          sx={{ width: "42%", height: "100%", boxShadow: 0, ml: "4%" }}
        >
          <img src={info1} style={{ width: "100%", objectFit: "contain" }} />
        </Grid>
        <Grid
          item
          sx={{ width: "42%", height: "100%", boxShadow: 0, mr: "4%" }}
        >
          <img src={info2} style={{ width: "100%", objectFit: "contain" }} />
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default ImageCard
