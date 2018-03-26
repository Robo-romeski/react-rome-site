export const UPDATE_TRANSITION = 'transitions:newTransition';

// export const goToWorks = (newTransition, router) => dispatch => {
//     return {
//         type: UPDATE_TRANSITION,
//         payload: {
//             transition: newTransition
//         }
//     }
// }

export function updateTransition(newTransition){
    return {
        type: UPDATE_TRANSITION,
        payload: {
            transition: newTransition
        }
    }
}