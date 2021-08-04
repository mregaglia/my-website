import React, {useState} from 'react'
import styled from 'styled-components';

const Burger = styled.div`
  position: absolute;
  padding-top: -4px;
  left: 50%;
  top: 35px;
  #nav-icon1 {
    left: -50%;
    width: 80px;
    height: 50px;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }
  span {
    display: block;
    position: absolute;
    height: 10px;
    width: 100%;
    background: white;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition:  0.25s ease-in-out;
  }
  span:nth-child(1) {
    top: 0px;
    width: 45%;
  }
  span:nth-child(2),
  span:nth-child(3) {
    top: 25px;
  }
  span:nth-child(4) {
    top: 50px;
    width: 65%;
    right: 0;
    left: initial;
  }

  #nav-icon1:hover {
    span:nth-child(1) {
      width: 100%;
    }
    span:nth-child(4) {
      width: 100%;
    }
  }

  #nav-icon1.open span:nth-child(1) {
    top: 25px;
    width: 0%;
    left: 50%;
  }

  #nav-icon1.open span:nth-child(2) {
    transform: rotate(45deg);
  }

  #nav-icon1.open span:nth-child(3) {
    transform: rotate(-45deg);
  }

  #nav-icon1.open span:nth-child(4) {
    top: 25px;
    width: 0%;
    right: 50%;
  }
`;

  const BurgerMenu = () => {
    const [toggleBurger, setToggleBurger] = useState(false);

    return (
      <Burger id="burger"
      onClick={() => setToggleBurger(!toggleBurger)}
      >
        <div id="nav-icon1"
        className={(toggleBurger && "open") || null}

        >
          <span />
          <span />
          <span />
          <span />
        </div>
      </Burger>
    );
  }

export default BurgerMenu;
