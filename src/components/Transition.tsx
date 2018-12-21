import React from 'react';
import {
  TransitionGroup,
  Transition as ReactTransition
} from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';

interface TransitionProps {
  children: React.ReactNode;
  location: Location;
}

const TIMEOUT = 250;
const DEFAULT_STYLE = {
  height: '100vh',
  opacity: 0,
  transition: `opacity ${TIMEOUT}ms ease-in-out`
};

const getTransitionStyles = (state: TransitionStatus): React.CSSProperties => {
  if (state === 'entering') {
    return { ...DEFAULT_STYLE, position: 'absolute' };
  }

  if (state === 'entered') {
    return { ...DEFAULT_STYLE, opacity: 1 };
  }

  return { ...DEFAULT_STYLE };
};

const Transition: React.SFC<TransitionProps> = ({ children, location }) => (
  <TransitionGroup>
    <ReactTransition key={location.pathname} timeout={TIMEOUT}>
      {state => <div style={getTransitionStyles(state)}>{children}</div>}
    </ReactTransition>
  </TransitionGroup>
);

export default Transition;
