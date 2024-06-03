"use client";
import React from 'react';
import { ReactSVG } from 'react-svg';
import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  from {
    transform: translateY(-300%);
  }
  to {
    transform: translateY(0%);
  }
`;

const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const AnimatedSVG = styled(ReactSVG)`
  position: absolute;
  top: 0;
  left: 0;
  width: 300%;
  height: 100%; 
  object-fit: cover;
  animation: ${slide} 300s infinite linear;
  margin-left: -350px;
 
`;

const ChildrenWrapper = styled.div`
  position: relative;
  z-index: 1; 
`;

const Background = ({ children }) => {
  return (
    <BackgroundContainer>
      <AnimatedSVG src="/finalsvg.svg" />
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
    </BackgroundContainer>
  );
};

export default Background;



