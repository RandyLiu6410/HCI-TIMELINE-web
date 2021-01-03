import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import ProcessGrid from "components/Grid/ProcessGrid.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/nextjs-material-kit/pages/designprocess.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div style={{backgroundColor: "#101010"}}>
      <Header
        brand="TIMELINE"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax>
        <div className={classes.container}>
          <h1>Design Process</h1>
        </div>
      </Parallax>
      <div className={classes.container}>
        <GridContainer direction="row" alignItems="center" justify="flex-start" spacing={10} className={classes.gridContainer}>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={1} name={"Needfinding"} image={require("assets/img/hci/1_needfinding.jpg")} slideUrl={"https://material-ui.com/zh/api/grid/"}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={2} name={"POV & Experience Prototypes"} image={require("assets/img/hci/2_pov.jpg")} slideUrl={"https://material-ui.com/zh/api/grid/"}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={3} name={"Concept Video "} image={require("assets/img/hci/3_concept-video.png")} slideUrl={"https://material-ui.com/zh/api/grid/"}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={4} name={"Low-Fidelity Prototype"} image={require("assets/img/hci/4_low-fi.png")} slideUrl={"https://material-ui.com/zh/api/grid/"}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={5} name={"Medium-fi Prototype v1"} image={require("assets/img/hci/5_midfi.png")} slideUrl={"https://material-ui.com/zh/api/grid/"} readmeUrl={"https://material-ui.com/zh/api/grid/"}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={6} name={"Group Heuristic Evaluation "} image={require("assets/img/hci/6_group-evaluation.png")} slideUrl={"https://material-ui.com/zh/api/grid/"}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={7} name={"Medium-fi Prototype v2"} image={require("assets/img/hci/7_midfi2.png")} slideUrl={"https://material-ui.com/zh/api/grid/"}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={8} name={"Hi-fi Prototype"} image={require("assets/img/hci/8_hifi.png")} slideUrl={"https://material-ui.com/zh/api/grid/"}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={9} name={"Usability Testing"} image={require("assets/img/hci/9_useability.png")} slideUrl={"https://material-ui.com/zh/api/grid/"}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={10} name={"Poster and Demo "} image={require("assets/img/hci/10_poster.png")} slideUrl={"https://material-ui.com/zh/api/grid/"}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={11} name={"High-fi Demo Video"} image={require("assets/img/hci/1_needfinding.jpg")} slideUrl={"https://material-ui.com/zh/api/grid/"}/>
          </GridItem>
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
}
