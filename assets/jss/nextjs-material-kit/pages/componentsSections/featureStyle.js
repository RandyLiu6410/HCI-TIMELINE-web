import { container } from "assets/jss/nextjs-material-kit.js";

const featureStyle = {
    container: {
      marginTop: "20px",
      marginBottom: "20px",
      ...container
    },
    brand: {
      color: "#FFFFFF",
      textAlign: "left",
    },
    title: {
      fontSize: "4.2rem",
      fontWeight: "600",
      display: "inline-block",
      position: "relative"
    },
    midtitle: {
      fontSize: "3rem",
      fontWeight: "400",
      display: "inline-block",
      position: "relative",
      fontFamily: "Noto Serif"
    },
    subtitle: {
      fontSize: "1.313rem",
      fontWeight: "400",
      maxWidth: "510px",
      margin: "10px 0 0",
      fontFamily: 'Noto Sans'
    },
    image: {
      width: '80%'
    }
  };
  
  export default featureStyle;
  