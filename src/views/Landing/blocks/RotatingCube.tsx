import React from 'react';
import styled from '@emotion/styled';

type Direction = 'up';

interface RotatingCubeProps {
  className?: string;
  direction?: Direction;
}

interface StyledContainerProps {
  rotationDirection: Direction;
}

const Cube = styled.div`
  min-width: 100%;
  position: relative;
  transform-origin: 0 0;
  transform-style: preserve-3d;
  transition: transform 650ms;
  will-change: transform;
`;

const Container = styled.div<StyledContainerProps>`
  perspective: 1800px;

  &:hover ${Cube}, &:focus-within ${Cube} {
    transform: ${({ rotationDirection }) =>
      rotationDirection === 'up' ? 'rotateX(90deg)' : 'none'};
  }
`;

const FrontFace = styled.div`
  backface-visibility: hidden;
`;

const BottomFace = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  transform: rotateX(-90deg);
  transform-origin: 0 0;
  width: 100%;
`;

interface RotatingCubeInterface<T> extends React.FunctionComponent<T> {
  FrontFace: React.FunctionComponent;
  BottomFace: React.FunctionComponent;
}

const RotatingCube: RotatingCubeInterface<RotatingCubeProps> = ({
  children,
  className,
  direction = 'up',
}) => (
  <Container className={className} rotationDirection={direction}>
    <Cube>
      {React.Children.toArray(children).filter(
        (child) =>
          React.isValidElement(child) &&
          typeof child.type === 'object' &&
          [FrontFace, BottomFace].includes(child.type)
      )}
    </Cube>
  </Container>
);

// Export elements which will be used as the children of the cube.
RotatingCube.FrontFace = FrontFace;
RotatingCube.BottomFace = BottomFace;

export default RotatingCube;
