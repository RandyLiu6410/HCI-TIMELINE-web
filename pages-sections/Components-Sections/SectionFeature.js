import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/featureStyle.js";

const useStyles = makeStyles(styles);

export default function SectionFeature() {
  const classes = useStyles();

  return (
    <Parallax image={require("assets/img/hci/web-bg-2.jpg")}>
        <div className={classes.container}>
        <GridContainer direction="row" alignItems="center" justify="center">
            <GridItem xl={6} sm={6} xs={12}>
              <img src={require("assets/img/hci/product_1_tag.png")} style={styles.image}/>
            </GridItem>
            <GridItem xl={6} sm={6} xs={12}>
              <div className={classes.brand}>
                <h2 className={classes.midtitle}>Tag Systems</h2>
                <h3 className={classes.subtitle}>
                  Auto-generated tags for classification of news, or create tag on your own.

                  Reading News in an more organized way !
                </h3>
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer direction="row" alignItems="center" justify="center">
            <GridItem xl={6} sm={6} xs={12}>
              <div className={classes.brand}>
                <h2 className={classes.midtitle}>Track the Follow-ups</h2>
                <h3 className={classes.subtitle}>
                  TIMELINE shows the latest news under each tag.

                  Never miss the follow-ups of the issue that you have cared about.
                </h3>
              </div>
            </GridItem>
            <GridItem xl={6} sm={6} xs={12}>
              <img src={require("assets/img/hci/product_2_context.png")} style={styles.image}/>
            </GridItem>
          </GridContainer>
          <GridContainer direction="row" alignItems="center" justify="center">
            <GridItem xl={6} sm={6} xs={12}>
              <img src={require("assets/img/hci/product_3_followup.png")} style={styles.image}/>
            </GridItem>
            <GridItem xl={6} sm={6} xs={12}>
              <div className={classes.brand}>
                <h2 className={classes.midtitle}>Get the Whole Context</h2>
                <h3 className={classes.subtitle}>
                  TIMELINE provides you an automatically generated timeline under each tag.

                  Get the context more efficiently than ever.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
    </Parallax>
  );
}
