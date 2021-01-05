import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "./GridItem";

import styles from "assets/jss/nextjs-material-kit/pages/designprocess.js";

const useStyles = makeStyles(styles);

export default function ProcessGrid(props) {
  const classes = useStyles();
  const { children, className, no, name, image, links, ...rest } = props;
  return (
    <GridContainer direction="row" justify="space-between" className={classes.grid}>
        <GridItem xl={2} sm={2} xs={2}></GridItem>
        <GridItem xl={10} sm={10} xs={10}>
            <GridContainer direction="column" justify="flex-start" className={classes.subgrid}>
                <GridItem xl={12} sm={12} xs={12} className={classes.subgrid}>
                    <GridContainer direction="row" justify="space-between">
                        <GridItem xl={2} sm={2} xs={2}>
                        <h2 className={classes.title}>{no}</h2>
                        </GridItem>
                        <GridItem xl={10} sm={10} xs={10}>
                            <div style={{backgroundImage: `url(${image}`}} className={classes.image}/>
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem xl={12} sm={12} xs={12} className={classes.subgrid}>
                <h2 className={classes.subtitle}>{name}</h2>
                </GridItem>
                <GridItem xl={12} sm={12} xs={12} style={{marginTop: "20px", marginBottom: "20px"}} className={classes.subgrid}>
                    <GridContainer direction="row">
                        {
                            links.map(link => {
                                return <GridItem xl={3} sm={3} xs={3}>
                                    <a className={classes.link} href={link.url} target="_blank">{link.name}</a>
                                </GridItem>
                            })
                        }
                    </GridContainer>
                </GridItem>
            </GridContainer>
        </GridItem>
    </GridContainer>
  );
}

ProcessGrid.defaultProps = {
  className: ""
};

ProcessGrid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  no: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.any,
  links: PropTypes.array,
};
