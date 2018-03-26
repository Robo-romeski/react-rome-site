import { UPDATE_TRANSITION } from '../actions/transition-actions'; 

export default function transitionReducer(state = {}, 
        {type, payload}){
            switch (type){
                case UPDATE_TRANSITION:
                return payload.transition;
                default:
                return state;
            }

}