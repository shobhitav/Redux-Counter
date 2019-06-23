export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const DOUBLE = 'DOUBLE';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function double() {
  return {
    type: DOUBLE
  };
}

