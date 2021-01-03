/*eslint-disable*/
import React from "react";
import { useRouter } from 'next/router'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const router = useRouter();
  const [path, setPath] = React.useState('/product');

  React.useEffect(() => {
    setPath(router.pathname)
  }, [router.pathname])

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/product"
          color="transparent"
          className={classes.navLink}
        >
          Product
        </Button>
        {
          path === "/product" ? <div className={classes.tabbar}/> : <div />
        }
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/designprocess"
          color="transparent"
          className={classes.navLink}
        >
          Design Process
        </Button>
        {
          path === "/designprocess" ? <div className={classes.tabbar}/> : <div />
        }
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/aboutus"
          color="transparent"
          className={classes.navLink}
        >
          About us
        </Button>
        {
          path === "/aboutus" ? <div className={classes.tabbar}/> : <div />
        }
      </ListItem>
    </List>
  );
}
