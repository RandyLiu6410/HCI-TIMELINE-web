import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "./GridItem";

import styles from "assets/jss/nextjs-material-kit/pages/aboutus.js";

const useStyles = makeStyles(styles);

export default function MemberGrid(props) {
  const classes = useStyles();
  const { children, className, image, name, degree, school, ...rest } = props;
  return (
    <GridContainer direction="column" justify="flex-start" className={classes.grid}>
        <GridItem xl={12} sm={12} xs={12} className={classes.subgrid}>
            <div style={{backgroundImage: `url(${image}`}} className={classes.image}/>
        </GridItem>
        <GridItem xl={12} sm={12} xs={12} className={classes.text}>
            <h2 className={classes.subtitle}>{name}</h2>
        </GridItem>
        <GridItem xl={12} sm={12} xs={12} className={classes.text}>
            <h2 className={classes.subtitle}>{degree}</h2>
        </GridItem>
        <GridItem xl={12} sm={12} xs={12} className={classes.text}>
            <h2 className={classes.subtitle}>{school}</h2>
        </GridItem>
    </GridContainer>
  );
}

MemberGrid.defaultProps = {
  className: ""
};

MemberGrid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  image: PropTypes.any,
  name: PropTypes.string,
  degree: PropTypes.string,
  school: PropTypes.string,
};
