import React from 'react'
import styled from 'styled-components';
import BurgerMenu from "./BurgerMenu";

const Title = styled.div`
  .headerTitle {
    text-transform: uppercase;
    font-size: 4.5vw;
    color: transparent;
    -webkit-text-stroke: 2px white;
    display: flex;
    justify-content: space-between;
  }
`;

  const Header = () => {
    return (
      <>
          <BurgerMenu />
          <Title>
            <div className="headerTitle">
              <h1>Massimo</h1>
              <h1>Regaglia</h1>
            </div>
          </Title>
      </>
    );
  }

export default Header;
