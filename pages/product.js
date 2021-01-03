import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionFeature from "pages-sections/Components-Sections/SectionFeature.js";

import styles from "assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
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
          <GridContainer direction="row" alignItems="center" justify="center">
            <GridItem xl={6} sm={6} xs={12}>
              <div className={classes.brand}>
                <h1 className={classes.title}>TIMELINE</h1>
                <h3 className={classes.subtitle}>
                  Gives you all the context you need
                </h3>
              </div>
            </GridItem>
            <GridItem xl={6} sm={6} xs={12}>
              <img src={require("assets/img/hci/banner-element@4x.png")} style={styles.image}/>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <SectionFeature />

      <Parallax>
        <div className={classes.container}>
          <GridContainer direction="row" alignItems="center" justify="center">
            <GridItem xl={6} sm={6} xs={12}>
              <div className={classes.brand}>
                <h2 className={classes.midtitle}>Download the app</h2>
              </div>
            </GridItem>
            <GridItem xl={6} sm={6} xs={12}>
              <img src={require("assets/img/hci/banner-element@4x.png")} style={styles.image}/>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
}
