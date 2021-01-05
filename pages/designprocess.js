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
    <div className={classes.root}>
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
            <ProcessGrid no={1} name={"Needfinding"} image={require("assets/img/hci/1_needfinding.jpg")} links={[{name: "Slides", url: "https://drive.google.com/file/d/1T25gNmbY4moEtuqYjQuB_x63vlN6uRoP/view?usp=sharing"}]}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={2} name={"POV & Experience Prototypes"} image={require("assets/img/hci/2_pov.jpg")} links={[{name: "Slides", url: "https://drive.google.com/file/d/1tgDrw_79pOyWp4u57g0MVaZgOW-5_feu/view?usp=sharing"}]}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={3} name={"Concept Video "} image={require("assets/img/hci/3_concept-video.png")} links={[{name: "Slides", url: "https://drive.google.com/file/d/1YhKfsbIIZLiJ6JAzf8sn1NIve3Wq63DH/view?usp=sharing"}]}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={4} name={"Low-Fidelity Prototype"} image={require("assets/img/hci/4_low-fi.png")} links={[{name: "Slides", url: "https://drive.google.com/file/d/16A43Dsy4KLh9PXtgN2kjB8RPR-RZAHRO/view?usp=sharing"}]}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={5} name={"Medium-fi Prototype v1"} image={require("assets/img/hci/5_midfi.png")} links={[{name: "Slides", url: "https://drive.google.com/file/d/1cWSgZQAlysJrMR_vmPtuf5kacznD-6XH/view?usp=sharing"}, {name: "README", url: "https://drive.google.com/file/d/1JVPmWjwO6-jJxcbyeYsiN7PJosk3ydy9/view?usp=sharing"}]}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={6} name={"Group Heuristic Evaluation "} image={require("assets/img/hci/6_group-evaluation.png")} links={[{name: "Slides", url: "https://drive.google.com/drive/folders/0B7qfB7KT30Kyfnp4Z01Hd2dLSWFWOVRYS2hkeC05Y3BfYmZqak9VS1NqZHpOdzBQeVA4Y3c?usp=sharing"}]}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={7} name={"Medium-fi Prototype v2"} image={require("assets/img/hci/7_midfi2.png")} links={[{name: "Slides", url: "https://drive.google.com/file/d/1WF2EU_EjJIOvKS0LG7MieYZr21KttTjI/view?usp=sharing"}]}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={8} name={"Hi-fi Prototype"} image={require("assets/img/hci/8_hifi.png")} links={[{name: "Slides", url: "https://drive.google.com/file/d/1BGLdStLD-nQrMhWP4BzGBK3SDt-pJjpq/view?usp=sharing"}, {name: "README", url: "https://drive.google.com/file/d/1_GeZ0Ko4TN2xOf_YlgbTFC3QHafPKqvm/view?usp=sharing"}]}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={9} name={"Usability Testing"} image={require("assets/img/hci/9_useability.png")} links={[{name: "Slides", url: "https://docs.google.com/presentation/d/1LRwxfhCaJN3rXAmdxDlFIi0g1QO86v6Y-rsJD6hQZL8/edit?usp=sharing"}]}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={10} name={"Poster and Demo "} image={require("assets/img/hci/10_poster.png")} links={[{name: "Poster", url: "https://drive.google.com/file/d/1T6mGkBBZxsczROyJUEMoe4V5VxhV5deh/view?usp=sharing"}]}/>
          </GridItem>
          <GridItem lg={4} md={6} xs={12} >
            <ProcessGrid no={11} name={"High-fi Demo Video"} image={require("assets/img/hci/11_demovideo.png")} links={[{name: "Video", url: "https://youtu.be/Atosq9Qs7_8"}]}/>
          </GridItem>
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
}
