import { useRef, useState, useEffect } from "react"
import useWindowDimensions from "./useWindowDimensions"
import VideoLooper from "react-video-looper"
import video from "../assets/White 1920x1080.mp4"
import birds from "../assets/Group 1000001828 (4).png"
import logo from "../assets/Rectangle 32.png"
import text1 from "../assets/centralize.svg"
import text2 from "../assets/need.svg"
import header from "../assets/imagine.svg"
import card1 from "../assets/2.svg"
import card2 from "../assets/3.svg"
import card3 from "../assets/1.svg"
import card4 from "../assets/4.svg"
import card5 from "../assets/5.svg"
import card10 from "../assets/11.svg"
import card20 from "../assets/12.svg"
import card30 from "../assets/15.svg"
import card40 from "../assets/13.svg"
import card50 from "../assets/14.svg"
import linkedin from "../assets/Linkedin.svg"
import productof from "../assets/Group 3576.svg"
import copyright from "../assets/Group 3585.svg"

import phonenumber from "../assets/+1 (2345) 678-90-12.svg"
import emailaddress from "../assets/support@personal.com.svg"
import company from "../assets/Product (2).svg"
import link from "../assets/Employee database.svg"
import demo from "../assets/Product (2) (1).svg"
import info1 from "../assets/Frame 3.svg"
import info2 from "../assets/Frame 4.svg"
import info3 from "../assets/Frame 5.svg"
import info4 from "../assets/Frame 6.svg"
import info5 from "../assets/Frame 7.svg"
import info6 from "../assets/Frame 8.svg"
import info8 from "../assets/Frame 9.svg"
import info7 from "../assets/Frame 10.svg"
import info9 from "../assets/Frame 11.svg"
import info10 from "../assets/Frame 12.svg"

import {
  Box,
  Card,
  Grid,
  Stack,
} from "@mui/material"
// import BasicModal from "./Modal"
import ImageCard from "./ImageCard"
import useScrollSnap from "react-use-scroll-snap"

const Home = () => {
  const [selected, setSelected] = useState(-1)
  // const [modalOpen, setModalOpen] = useState(false)
  const { height, width } = useWindowDimensions();
  const scrollRef = useRef(null)
  const { snapToNext, snapToPrev } = useScrollSnap({
    ref: scrollRef,
    duration: 50,
    isDirectionEnabled: false
  })
  console.log("scrollref", scrollRef)

  // const openModal = () => setModalOpen(true)
  // const closeModal = () => setModalOpen(false)

  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.scrollY
    if (position < 400 && height > 700) {
        setSelected(-1)
    }
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Grid
      container
      sx={{ m: -1, p: 0, width: "100vw" }}
      display="flex"
      direction="column"
      alignItems="center"
      justifyContent="center"
      rowSpacing={0}
      ref={scrollRef}
    >
      <Grid
        item
        className="background-section"
        sx={{
          width: "100vw",
          height: "30vw",
          boxShadow: 0,
          mt: 0,
          backgroundColor: "#492B7C",
        }}
      >
        <Stack
          direction="row"
          justifyContent="start"
          alignItems="start"
          sx={{ width: "100%", height: "100%", backgroundColor: "#492B7C" }}
        >
          <img
            src={birds}
            style={{
              width: "100%",
              objectFit: "contain",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <Box
            sx={{
              width: "25.3%",
              height: "97.5%",
              zIndex: 1500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={logo} style={{ width: "65%", objectFit: "contain" }} />
          </Box>
          <Box
            sx={{
              width: "74.7%",
              height: "97.5%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              zIndex: 1500,
            }}
          >
            <img src={header} style={{ width: "78%", objectFit: "contain" }} />
          </Box>
        </Stack>
      </Grid>

      <Grid
        item
        sx={{ m: 0, p: 0, width: "100%", height: '55vw', maxHeight: '100vh', mt: 2 }}
        display="flex"
        direction="row"
        alignItems="left"
        justifyContent="space-between"
        rowSpacing={0}
      >
        <Grid
        item
        sx={{ width: "40%", height: "55vw", ml: "4%", boxShadow: 0, maxHeight: '100vw' }}
        style={{ backgroundColor: "#492B7C", position: "relative" }}
        >
        <div
            style={{
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            }}
        >
            <VideoLooper
            width={"100%"}
            height={"100%"}
            source={video}
            start={0}
            end={9.5}
            objectFit={"contain"}
            style={{ backgroundColor: "#492B7C" }}
            />
        </div>
        </Grid>

        <Grid
          item
          sx={{ width: "50vw", height: "50vw", maxHeight: '100vh', boxShadow: 0, mt: 1 }}
          display="flex"
          direction="column"
          alignItems="center"
          style={{ backgroundColor: "#492B7C" }}
        >
          <Grid
            container
            sx={{ boxShadow: 0, height: "70%" }}
            rowSpacing={0}
            justifyContent="space-between"
          >
            <Grid
              item
              sx={{
                backgroundColor: "#492B7C",
                width: "80%",
                height: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={text1}
                style={{ width: "100%", objectFit: "contain" }}
              />
            </Grid>
            <Grid
              item
              sx={{
                backgroundColor: "#492B7C",
                width: "80%",
                height: "50%",
                mt: "1%",
              }}
            >
              <img
                src={text2}
                style={{ width: "100%", objectFit: "contain" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        sx={{ width: "90vw", height: "35vw", boxShadow: 0, m: 2, mb: 0, pt: 2.5 }}
        style={{ backgroundColor: "#492B7C" }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="left"
          sx={{ width: "100%", height: "100%" }}
        >
          <Box
            sx={{ width: "20%", height: "100%" }}
            onMouseEnter={() => setSelected(1)}
          >
            <img
              src={selected === 1 ? card30 : card3}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                opacity: selected === 1 ? 1 : 0.5,
                //transform: selected === 1 ? 'scale(1)' : 'scale(0.95)',
                transition: "opacity 0.5s ease",
              }}
            />
          </Box>
          <Box
            sx={{ width: "20%", height: "100%" }}
            onMouseEnter={() => setSelected(2)}
          >
            <img
              src={selected === 2 ? card10 : card1}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                opacity: selected === 2 ? 1 : 0.5,
                //transform: selected === 2 ? 'scale(1)' : 'scale(0.95)',
                transition: "opacity 0.5s ease",
              }}
            />
          </Box>
          <Box
            sx={{ width: "20%", height: "100%" }}
            onMouseEnter={() => setSelected(3)}
          >
            <img
              src={selected === 3 ? card20 : card2}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                opacity: selected === 3 ? 1 : 0.5,
                //transform: selected === 3 ? 'scale(1)' : 'scale(0.95)',
                transition: "opacity 0.5s ease",
              }}
            />
          </Box>
          <Box
            sx={{ width: "20%", height: "100%" }}
            onMouseEnter={() => setSelected(4)}
          >
            <img
              src={selected === 4 ? card40 : card4}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                opacity: selected === 4 ? 1 : 0.5,
                //transform: selected === 4 ? 'scale(1)' : 'scale(0.95)',
                transition: "opacity 0.5s ease",
              }}
            />
          </Box>
          <Box
            sx={{ width: "20%", height: "100%" }}
            onMouseEnter={() => setSelected(5)}
          >
            <img
              src={selected === 5 ? card50 : card5}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                opacity: selected === 5 ? 1 : 0.5,
                //transform: selected === 5 ? 'scale(1)' : 'scale(0.95)',
                transition: "opacity 0.5s ease",
              }}
            />
          </Box>
        </Stack>
      </Grid>

      {selected === 1 && <ImageCard info1={info1} info2={info2} />}

      {selected === 2 && <ImageCard info1={info4} info2={info3} />}

      {selected === 3 && <ImageCard info1={info5} info2={info6} />}

      {selected === 4 && <ImageCard info1={info7} info2={info8} />}

      {selected === 5 && <ImageCard info1={info9} info2={info10} />}

      <Grid
        item
        sx={{
          width: "100vw",
          height: "45vw",
          boxShadow: 0,
          m: 0,
          justifyContent: "center",
          display: "flex",
          alignItems: "start",
          backgroundColor: "#151551",
        }}
      >
        <Grid
          container
          sx={{ width: "80%", height: "60%", boxShadow: 0, mt: "5vw" }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%", height: "100%", backgroundColor: "#151551" }}
          >
            <Stack item sx={{ width: "25%", height: "100%" }}>
              <Card
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "#151551",
                  boxShadow: 0,
                }}
              >
                <div>
                  <img
                    src={logo}
                    style={{ width: "50%", objectFit: "contain" }}
                  />
                </div>
                <div style={{ marginTop: "3vw" }}>
                  <img
                    src={phonenumber}
                    style={{ width: "80%", objectFit: "contain" }}
                  />
                </div>
                <div style={{ marginTop: "2vw" }}>
                  <img
                    src={emailaddress}
                    style={{ width: "75%", objectFit: "contain" }}
                  />
                </div>
              </Card>
            </Stack>
            <Stack item sx={{ width: "25%", height: "100%" }}>
              <Card
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "#151551",
                  boxShadow: 0,
                }}
              >
                <div style={{ marginTop: "10vw", textAlign: "left" }}>
                  <img
                    src={company}
                    style={{ width: "60%", marginLeft: "2vw", objectFit: "contain" }}
                  />
                </div>
                <div style={{ marginTop: "2vw", marginLeft: "2vw", textAlign: "left" }}>
                    <a href="https://www.thepoint.fi" target="_blank" rel="noopener noreferrer">
                        <img
                        src={link}
                        style={{ width: "50%", objectFit: "contain" }}
                        />
                    </a>
                    </div>
              </Card>
            </Stack>
            <Stack item sx={{ width: "25%", height: "100%" }}>
              <Card
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "#151551",
                  boxShadow: 0,
                }}
              >
                <div
                  // onClick={openModal}
                  style={{ marginTop: "10vw", textAlign: "center" }}
                >
                  <img
                    src={demo}
                    style={{ width: "100%", objectFit: "contain" }}
                  />
                </div>
              </Card>
            </Stack>
          </Stack>
          <Grid item sx={{ width: "100vw", backgroundColor: "#151551", height: '5vw' }}>
                <Stack direction={'row'} justifyContent={'start'} sx={{width: '100%', height: '100%'}}>
                    <Stack item alignItems={"start"} justifyContent={"center"} sx={{width: '33.33%'}}>
                        <a href="https://fi.linkedin.com/in/salvatore-ciancio-7755301a" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} style={{height: '3vw', objectFit: 'contain'}}/>
                        </a>
                    </Stack>
                    <Stack item alignItems={"center"} justifyContent={"center"} sx={{width: '33.33%'}}>
                        <img src={copyright} style={{height: '3.2vw', objectFit: 'contain'}}/>    
                    </Stack>
                    <Stack item alignItems={"end"} justifyContent={"center"} sx={{width: '33.34%'}}>
                        <img src={productof} style={{height: '1.2vw', objectFit: 'contain'}}/>    
                    </Stack>
                </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home
