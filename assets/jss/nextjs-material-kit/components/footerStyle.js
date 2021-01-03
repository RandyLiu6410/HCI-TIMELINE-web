import { container, grayColor } from "assets/jss/nextjs-material-kit.js";

const footerStyle = {
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    margin: "0",
    float: "right!important"
  },
  footer: {
    backgroundColor: "#101010",
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    position: "relative",
  },
  a: {
    color: 'gray',
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
};
export default footerStyle;
