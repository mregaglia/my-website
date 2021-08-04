import * as React from "react";
import 'normalize.css';
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import styled from "styled-components";
import BurgerMenu from "../components/BurgerMenu";

const Container = styled.div`
  .headerTitle {
    text-transform: uppercase;
    font-size: 4.5vw;
    color: transparent;
    -webkit-text-stroke: 2px white;
    display: flex;
    justify-content: space-between;
  }
`


const IndexPage = () => {
  return (
    <>
      <GlobalStyles/>
      <Typography/>
      <BurgerMenu />
        <Container>
          <div className="headerTitle">
            <h1>Massimo</h1>
            <h1>Regaglia</h1>
          </div>
        </Container>
    </>
  )
}

export default IndexPage;
