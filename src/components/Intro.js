import React from 'react'
import styled from 'styled-components';
import ProfilePic from '../assets/images/avatar.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  margin-top: 35px;
  .AvatarArea {
    width: 200px;
    height: auto;
    img {
      clip-path: circle(90px at center);
    }
  }
  .biography {
    max-width: 600px;
    margin-left: 25px;
  }
`;

  const Intro = () => {
    return (
      <Container>
        <div className="AvatarArea">
          <img src={ProfilePic} alt="profile" />
        </div>
        <div className="biography">
          <p>
            Hello world !<br />
            Je suis Massimo Regaglia, dévelopeur web orienté front-end avec une
            longue expérience de créatif/directeur artistique.
          </p>
        </div>
      </Container>
    );
  };

export default Intro;
