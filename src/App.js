import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


//FONTS
// font-family: 'Satisfy', cursive;
// font-family: 'Stick No Bills', sans-serif;

const GlobalStyle = createGlobalStyle`{
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
}`

const Container = styled.div`
  font-family: 'Satisfy', cursive;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white-smoke;
`;

const StopwatchGroup = styled.div`
  width: 45vw;
  height: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const OuterBorder = styled.div`
  width: 30vw;
  height: 55vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 10px solid #3D5A80;
  background-color: #98C1D9;
`;

const Inner = styled.div`
  font-family: 'Stick No Bills', sans-serif;
  font-weight: 400;
  width: 27vw;
  height: 49vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  background-color: #3D5A80;
`;

const Marker = styled.p`
  font-size: 1.25rem;
  color: #EE6C4D;
`;

const Marker60 = styled(Marker)`
  position: relative;
  bottom: 18vh;
`;

const Marker15 = styled(Marker)`
  position: relative;
  left: 12vw;
`;

const Marker30 = styled(Marker)`
  position: relative;
  top: 17vh;
`;

const Marker45 = styled(Marker)`
  position: relative;
  right: 12vw;
  bottom: 9.5vh;
`;

const MilliContainer = styled.div`
  width: 10vw;
  height: 18vh;
  position: relative;
  top: 5vh;
  border-radius: 50%;
  background-color: #E0FBFC;
`;

const TimeContainer = styled.div`
  width: 10vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 3vh;
  border-radius: 5px;
  background-color: #E0FBFC;
`;

const Display = styled.h2`
  font-size: 1.5rem;
  color: #293241;
`;

const BtnContainer = styled.div`
  width: 10vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Btn = styled.button`
  font-size: 1.25rem;
  color: #293241;
  width: 10vw;
  height: 8vh;
  border: none;
  border-radius: 5px;
  background-color: #ee6c4d;
`;

const SecondaryBtn = styled(Btn)`
  border: 2px solid #ee6c4d;
  background-color: transparent;
`;

export default class Stopwatch extends Component {

  state = {
    stopwatch: 0,
  }

  start = () => {
    let cronos = setInterval(() => {
      this.setState({
        stopwatch: this.state.stopwatch + 1
      });
    }, 1000);

    this.pause = () => {
      clearInterval(cronos)
    }
  }

  reset = () => {
    this.setState({
      stopwatch: 0
    });
  }

  render() {
    let { start, reset, pause } = this
    let { stopwatch } = this.state

    return (
      <Container>
        <GlobalStyle />
        <h1>Cronômetro</h1>
        <StopwatchGroup>
          <div>
            <OuterBorder>
              <Inner>
                <MilliContainer></MilliContainer>
                <Marker60>60</Marker60>
                <Marker15>15</Marker15>
                <Marker30>30</Marker30>
                <Marker45>45</Marker45>
                <TimeContainer>
                  <Display>{stopwatch}</Display>
                </TimeContainer>
              </Inner>
            </OuterBorder>
          </div>
          <BtnContainer>
            <Btn onClick={start}>Iniciar</Btn>
            <Btn onClick={pause}>Pausa</Btn>
            <SecondaryBtn onClick={reset}>Reset</SecondaryBtn>
          </BtnContainer>
        </StopwatchGroup>
      </Container>
    )
  }
}
