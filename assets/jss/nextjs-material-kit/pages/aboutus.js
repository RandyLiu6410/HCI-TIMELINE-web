import { container, title } from "assets/jss/nextjs-material-kit.js";

const aboutusPageStyle = {
  container: {
    color: "#FFFFFF",
    ...container
  },
  root: {
    backgroundColor: "#101010", 
    width: '100%'
  },
  main: {
    backgroundColor: "#101010", 
    position: "relative",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  link: {
    fontSize: "1rem",
    color: "#FFFFFF",
    textDecoration: "underline",
    fontStyle: "italic",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  image: {
    maxWidth: '100%',
    height: "160px",
    backgroundSize: "cover"
  },
  gridContainer: {
    marginTop: "10px",
    marginBottom: "30px",
  },
  grid: {
    "&:hover,&:focus": {
      boxShadow: "1px 1px 30px 1px rgba(29, 181, 255, 0.3)"
    },
    borderRadius: '10px',
    padding: "0px",
    width: "360px",
    height: "320px"
  },
  subgrid: {
    padding: "0px"
  }
};

export default aboutusPageStyle;
