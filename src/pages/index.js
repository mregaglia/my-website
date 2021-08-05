import * as React from "react";
import 'normalize.css';
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Header from "../components/Header";
import Intro from "../components/Intro";


const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header/>
      <Intro />
    </>
  );
}

export default IndexPage;
