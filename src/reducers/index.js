import { INCREMENT, DECREMENT, DOUBLE } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  console.log("reducers.js: reducer: action:", action);
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        count: state.count+1
      })
    case DECREMENT:
      return Object.assign({}, state, {
        count: state.count-1
      })
    case DOUBLE:
      return Object.assign({}, state, {
        count: state.count*2
      })
    default:
      return state;  
  }
};


