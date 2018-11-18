import React from 'react';
import {
  TransitionGroup,
  Transition as ReactTransition
} from 'react-transition-group';

const TIMEOUT = 250;
const DEFAULT_STYLE = {
  height: '100vh',
  opacity: 0,
  transition: `opacity ${TIMEOUT}ms ease-in-out`
};
const TRANSITION_STYLES = {
  entering: {
    position: 'absolute'
  },
  entered: {
    opacity: 1
  }
};

export default function Transition({ children, location }) {
  return (
    <TransitionGroup>
      <ReactTransition key={location.pathname} timeout={TIMEOUT}>
        {state => (
          <div
            style={{
              ...DEFAULT_STYLE,
              ...TRANSITION_STYLES[state]
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
}
