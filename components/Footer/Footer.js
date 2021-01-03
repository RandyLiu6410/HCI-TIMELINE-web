/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true
  });
  const aClasses = classNames({
    [classes.a]: true
  });
  return (
    <footer className={footerClasses} style={{boxShadow: '1px 1px 30px 1px rgba(255, 255, 255, 0.05)'}}>
      <div className={classes.container}>
        <div className={classes.left}>
          <a className={aClasses}>2020F NTU Intro to HCI Course</a>
        </div>
        <div className={classes.right}>
          <a className={aClasses}>© TIMELINE. All rights reserved.</a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
