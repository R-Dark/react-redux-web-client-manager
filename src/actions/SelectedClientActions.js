import firebase from 'firebase'

import {
  CLIENT_SELECTED,
  UPDATE_OFFER_SUCCESS
} from './types';


export function selectClient(clientInfo) {
  return {
    type: CLIENT_SELECTED,
    payload: clientInfo
  };
}

export const updateOffer = ( offerUpdate ) => {
  return (dispatch) => {
    firebase.database().ref(`7`)
      .update( offerUpdate )
      .then(() => {
        dispatch({ type: UPDATE_OFFER_SUCCESS })
    })
  }
}

// export const updateOffer = (offerUpdate) => {
//   // console.log(ownername, state, zip)
//   return (dispatch) => {
//     firebase.database()
//     .ref("/")
//       .orderByChild("Owner")
//         .equalTo(ownername)
//           .on('value', snapshot => {
//             // console.log(snapshot.val())
//             // console.log(ownername)
//             dispatch({ type: SEARCH_CLIENT, payload: snapshot.val() })
//           })
//
//     }
//   }



// export const selectClient = (clientInfo) => {
//
//   return (dispatch) => {
//         dispatch({ type: CLIENT_SELECTED, payload: clientInfo })
//       })
//
//   }
// }
