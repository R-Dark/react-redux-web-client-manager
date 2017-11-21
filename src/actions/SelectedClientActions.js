import {
  CLIENT_SELECTED
} from './types';


export function selectClient(clientInfo) {
  return {
    type: CLIENT_SELECTED,
    payload: clientInfo
  };
}

// export const selectClient = (clientInfo) => {
//
//   return (dispatch) => {
//         dispatch({ type: CLIENT_SELECTED, payload: clientInfo })
//       })
//
//   }
// }
