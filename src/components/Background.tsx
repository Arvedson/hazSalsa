import React, { ReactNode } from 'react';
import { keyframes } from 'styled-components';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const AnimatedSVG = styled(ReactSVG)`
  position: absolute;
  left: 0;
  height: 100%;
  object-fit: cover;
  animation: ${slide} 300s infinite linear;
  margin-left: -350px;
`;

const ChildrenWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

interface BackgroundProps {
  children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
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
