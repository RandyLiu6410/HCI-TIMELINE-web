import { container } from "assets/jss/nextjs-material-kit.js";

const componentsStyle = {
  container,
  root: {
    backgroundColor: "#101010", 
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  brand: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    fontFamily: 'Audrey',
    color: "#FFFFFF",
  },
  midtitle: {
    fontSize: "3rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    fontFamily: 'Noto Sans',
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "510px",
    margin: "10px 0 0",
    fontFamily: "Noto Serif",
    color: "#FFFFFF",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px"
    }
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  image: {
    width: '100%',
  },
  download: {
    backgroundColor: "#010101"
  },
  contactus: {
    height: 300,
    flexDirection: 'column',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  button: {
    width: 200,
    height: 60,
    backgroundColor: '#101010',
    flexDirection: 'column',
    justifyContent: 'center',
    display: 'flex'
  }
};

export default componentsStyle;
