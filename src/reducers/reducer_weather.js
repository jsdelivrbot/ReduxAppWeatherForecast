import { FETCH_WEATHER } from '../actions/index';

// Initial state is array, because we want to display multiple weather in differnt city
export default function(state = [], action) {
  console.log('Action received', action);
  switch(action.type) {
  case FETCH_WEATHER:
    // Returning new data array(new + old). We don't want to manipulate existing array.
    // return state.concat([action.payload.data]);
    return [ action.payload.data, ...state ];
  }
  return state;
}
