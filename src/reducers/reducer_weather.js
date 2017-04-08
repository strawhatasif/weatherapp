import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
    
    switch (action.type) {
        //we only care about the data attribute
        case FETCH_WEATHER:
            //use state.concat to add new values and NOT state.push! 
            //state.push IS A TRAP!!!
            //state.concat creates a NEW array that contains the 
            //new value plus previous
            
            //this is the normal syntax:
            // return state.concat([ action.payload.data ]);
            
            //and here is ES6 syntax '...state' destructures the state array:
            return [ action.payload.data, ...state ];
            
    }
    
    return state;
}