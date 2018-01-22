import firebase from 'firebase'
import {reset} from 'redux-form';

import {
  CLIENTS_FETCH_SUCCESS,
  SEARCH_CLIENT,
  SEARCH_CLIENT_BY_NAME,
  SEARCH_CLIENT_BY_STATE,
  NONE_SELECTED,
  SEARCH_RESET,
  SEARCH_CLIENT_BY_STATUS,
  SEARCH_CLIENT_BY_ZIP
} from './types';

export const clientsFetch = () => {

  return (dispatch) => {
    firebase.database().ref(`/`)
      .on('value', snapshot => {
        // console.log(snapshot.val())
        dispatch({ type: CLIENTS_FETCH_SUCCESS, payload: snapshot.val() })
      })

  }
}

export const queryDbByFilters = ( ownername, state, statusDropdown, zip ) => {
  console.log(ownername, state, zip, statusDropdown)

  if (ownername) {
    return (dispatch) => {
      firebase.database()
      .ref("/")
        .orderByChild("Owner")
          .startAt(ownername)
            .endAt(`${ownername}\uf8ff`)
                .on('value', snapshot => {
                  let item = snapshot.val()
                  console.log(item)
                  if (item != null) {
                    let itemArr = []
                    let length = Object.keys(snapshot.val()).length

                    for (let i = 0; i < length; i++) {
                    
                      if (state) {
                        if (snapshot.val()[Object.keys(snapshot.val())[i]].State !== state) {
                          let key = Object.keys(snapshot.val())[i]
                          delete item[key]
                        }
                      }
                    
                      if (statusDropdown) {
                        if (snapshot.val()[Object.keys(snapshot.val())[i]].statusUpdate !== statusDropdown) {
                          let key = Object.keys(snapshot.val())[i]
                          delete item[key]
                        }
                      }
                    
                      if (zip) {
                        if (snapshot.val()[Object.keys(snapshot.val())[i]].Zip !== zip) {
                          let key = Object.keys(snapshot.val())[i]
                          delete item[key]
                        }
                      }
                    
                    }
                    // console.log(item)
                    dispatch({ type: SEARCH_CLIENT, payload: item })
                    dispatch(reset('searchform'));
                    dispatch({ type: SEARCH_RESET })
                    
                    
                  } else {
                    alert('No matching identifier')
                  }



              })
       }
  } else if (state) {
    return (dispatch) => {
      firebase.database()
      .ref("/")
        .orderByChild("State")
          .equalTo(state)
                .on('value', snapshot => {
                  if (snapshot.val() !== null) {

                    let item = snapshot.val()
                    let length = Object.keys(snapshot.val()).length

                    for (let i = 0; i < length; i++) {

                      if (statusDropdown) {
                        if (snapshot.val()[Object.keys(snapshot.val())[i]].statusUpdate !== statusDropdown) {
                          let key = Object.keys(snapshot.val())[i]
                          delete item[key]
                        }
                      }

                      if (zip) {
                        if (snapshot.val()[Object.keys(snapshot.val())[i]].Zip !== zip) {
                          let key = Object.keys(snapshot.val())[i]
                          delete item[key]
                        }
                      }

                    }
                    dispatch({ type: SEARCH_CLIENT, payload: item })
                    dispatch(reset('searchform'));
                    dispatch({ type: SEARCH_RESET })
                  } else {
                    alert('No matching identifier')
                  }

              })
       }
   } else if (statusDropdown) {
     return (dispatch) => {
       firebase.database()
       .ref("/")
         .orderByChild("statusUpdate")
           .equalTo(statusDropdown)
                 .on('value', snapshot => {
                   if (snapshot.val() !== null) {
                     let item = snapshot.val()
                     let length = Object.keys(snapshot.val()).length

                     for (let i = 0; i < length; i++) {

                       if (zip) {
                         if (snapshot.val()[Object.keys(snapshot.val())[i]].Zip !== zip) {
                           let key = Object.keys(snapshot.val())[i]
                           delete item[key]
                         }
                       }

                     }
                     dispatch({ type: SEARCH_CLIENT, payload: item })
                     dispatch(reset('searchform'));
                     dispatch({ type: SEARCH_RESET })
                   } else {
                     alert('No matching identifier')
                   }

               })
        }
    } else if (zip) {
      return (dispatch) => {
        firebase.database()
        .ref("/")
          .orderByChild("Zip")
          .startAt(zip)
            .endAt(`${zip}\uf8ff`)
                  .on('value', snapshot => {
                    if (snapshot.val() !== null) {
                      let item = snapshot.val()

                      dispatch({ type: SEARCH_CLIENT, payload: item })
                      dispatch(reset('searchform'));
                      dispatch({ type: SEARCH_RESET })
                    } else {
                      alert('No matching identifier')
                    }
                })
         }
    }

  }

// export const searchClient = (ownername) => {
//   // console.log(ownername, state, zip)
//   return (dispatch) => {
//     firebase.database()
//     .ref("/")
//       .orderByChild("Owner")
//         .equalTo(ownername)
//           .on('value', snapshot => {
//             dispatch({ type: SEARCH_CLIENT_BY_NAME, payload: snapshot.val() })
//             // console.log(snapshot.val())
//             dispatch(reset('searchform'));
//             dispatch({ type: SEARCH_RESET })
// 
//         })
//      }
//   }
// 
// 
//   export const searchByState = (state) => {
//     return (dispatch) => {
//       firebase.database()
//       .ref("/")
//         .orderByChild("State")
//           .equalTo(state)
//             .on('value', snapshot => {
//               // console.log(snapshot.val())
//               // console.log(ownername)
//               dispatch({ type: SEARCH_CLIENT_BY_STATE, payload: snapshot.val() })
//               dispatch(reset('searchform'));
//               dispatch({ type: SEARCH_RESET })
//           })
//        }
//     }
// 
// 
//     export const searchByStatus = (statusDropdown) => {
//       // console.log(ownername, state, zip)
//       return (dispatch) => {
//         firebase.database()
//         .ref("/")
//           .orderByChild("statusUpdate")
//             .equalTo(statusDropdown)
//               .on('value', snapshot => {
//                 dispatch({ type: SEARCH_CLIENT_BY_STATUS, payload: snapshot.val() })
//                 dispatch(reset('searchform'));
//                 dispatch({ type: SEARCH_RESET })
//             })
//          }
//       }
// 
// 
//       export const searchByZip = (zip) => {
//         // console.log(ownername, state, zip)
//         return (dispatch) => {
//           firebase.database()
//           .ref("/")
//             .orderByChild("Zip")
//               .equalTo(zip)
//                 .on('value', snapshot => {
//                   dispatch({ type: SEARCH_CLIENT_BY_ZIP, payload: snapshot.val() })
//                   dispatch(reset('searchform'));
//                   dispatch({ type: SEARCH_RESET })
//               })
//            }
//         }



  export function noneSelected() {
    return {
      type: NONE_SELECTED
    };
  }
