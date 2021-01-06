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
import MemberGrid from "components/Grid/MemberGrid.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/nextjs-material-kit/pages/aboutus.js";

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
          <h1>About us</h1>
        </div>
      </Parallax>
      <div className={classes.container}>
        <GridContainer direction="row" alignItems="center" justify="flex-start" spacing={10} className={classes.gridContainer}>
          <GridItem xl={4} sm={4} xs={12}>
            <MemberGrid no={1} name={"江沛儀"} image={require("assets/img/hci/peiyi_with_sign_3x.png")} degree={"BSc 2022, CS"} school={"Georgia Institute of Technology"}/>
          </GridItem>
          <GridItem xl={4} sm={4} xs={12}>
            <MemberGrid no={2} name={"劉鎧禎"} image={require("assets/img/hci/randy_with_sign_3xpng.png")} degree={"MSc 2021, CAECE"} school={"National Taiwan University"}/>
          </GridItem>
          <GridItem xl={4} sm={4} xs={12}>
            <MemberGrid no={3} name={"陳怡蓁"} image={require("assets/img/hci/andy_with_sign_3x.png")} degree={"MBA 2022, IM"} school={"National Taiwan University"}/>
          </GridItem>
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
}
