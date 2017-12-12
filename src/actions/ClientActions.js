import firebase from 'firebase'
import {reset} from 'redux-form';

import {
  CLIENTS_FETCH_SUCCESS,
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
    console.log('name')
    return (dispatch) => {
      firebase.database()
      .ref("/")
        .orderByChild("Owner")
          .equalTo(ownername)
                .on('value', snapshot => {
                  console.log(snapshot.val())
                  let item = snapshot.val()
                  let itemArr = []
                  let length = Object.keys(snapshot.val()).length

                  for (let i = 0; i < length; i++) {

                    if (state) {
                      if (snapshot.val()[Object.keys(snapshot.val())[i]].State !== state) {
                        console.log('deleting state')
                        let key = Object.keys(snapshot.val())[i]
                        delete item[key]
                      } else {
                        itemArr.push(snapshot.val()[Object.keys(snapshot.val())[i]])
                      }
                    }

                    if (statusDropdown) {
                      if (snapshot.val()[Object.keys(snapshot.val())[i]].statusUpdate !== statusDropdown) {
                        console.log('deleting status')
                        let key = Object.keys(snapshot.val())[i]
                        delete item[key]
                      } else {
                        itemArr.push(snapshot.val()[Object.keys(snapshot.val())[i]])
                      }
                    }

                    if (zip) {
                      if (snapshot.val()[Object.keys(snapshot.val())[i]].Zip !== zip) {
                        console.log('deleting zip')
                        let key = Object.keys(snapshot.val())[i]
                        delete item[key]
                      } else {
                        itemArr.push(snapshot.val()[Object.keys(snapshot.val())[i]])
                      }
                    }

                  }
                  if (itemArr.length == 0) {
                    itemArr = item
                  }
                  dispatch({ type: SEARCH_CLIENT_BY_NAME, payload: itemArr })
                  // console.log(snapshot.val())
                  dispatch(reset('searchform'));
                  dispatch({ type: SEARCH_RESET })

              })
       }
  } else if (state) {
    console.log('state')
    return (dispatch) => {
      firebase.database()
      .ref("/")
        .orderByChild("State")
          .equalTo(state)
                .on('value', snapshot => {
                  console.log(snapshot.val())
                  let item = snapshot.val()
                  let itemArr = []
                  let length = Object.keys(snapshot.val()).length

                  for (let i = 0; i < length; i++) {


                    if (statusDropdown) {
                      if (snapshot.val()[Object.keys(snapshot.val())[i]].statusUpdate !== statusDropdown) {
                        console.log('deleting status')
                        let key = Object.keys(snapshot.val())[i]
                        // console.log(item[key])
                        delete item[key]
                      } else {
                        itemArr.push(snapshot.val()[Object.keys(snapshot.val())[i]])
                      }
                    }

                    if (zip) {
                      if (snapshot.val()[Object.keys(snapshot.val())[i]].Zip !== zip) {
                        console.log('deleting zip')
                        let key = Object.keys(snapshot.val())[i]
                        delete item[key]
                      } else {
                        itemArr.push(snapshot.val()[Object.keys(snapshot.val())[i]])
                      }
                    }

                  }
                  if (itemArr.length == 0) {
                    itemArr = item
                  }
                  dispatch({ type: SEARCH_CLIENT_BY_NAME, payload: itemArr })
                  // console.log(snapshot.val())
                  dispatch(reset('searchform'));
                  dispatch({ type: SEARCH_RESET })

              })
       }
   } else if (statusDropdown) {
     console.log('status')
     return (dispatch) => {
       firebase.database()
       .ref("/")
         .orderByChild("statusUpdate")
           .equalTo(statusDropdown)
                 .on('value', snapshot => {
                   let item = snapshot.val()
                   let itemArr = []
                   let length = Object.keys(snapshot.val()).length

                   for (let i = 0; i < length; i++) {


                     if (zip) {
                       if (snapshot.val()[Object.keys(snapshot.val())[i]].Zip !== zip) {
                         console.log('deleting zip')
                         let key = Object.keys(snapshot.val())[i]
                         delete item[key]
                       } else {
                         itemArr.push(snapshot.val()[Object.keys(snapshot.val())[i]])
                       }
                     }

                   }
                   if (itemArr.length == 0) {
                     itemArr = item
                   }
                   dispatch({ type: SEARCH_CLIENT_BY_NAME, payload: itemArr })
                   // console.log(snapshot.val())
                   dispatch(reset('searchform'));
                   dispatch({ type: SEARCH_RESET })

               })
        }
    } else if (zip) {
      console.log('zip')
      return (dispatch) => {
        firebase.database()
        .ref("/")
          .orderByChild("Zip")
            .equalTo(zip)
                  .on('value', snapshot => {
                    let item = snapshot.val()

                    dispatch({ type: SEARCH_CLIENT_BY_NAME, payload: item })
                    // console.log(snapshot.val())
                    dispatch(reset('searchform'));
                    dispatch({ type: SEARCH_RESET })

                })
         }
    }

  }

export const searchClient = (ownername) => {
  // console.log(ownername, state, zip)
  return (dispatch) => {
    firebase.database()
    .ref("/")
      .orderByChild("Owner")
        .equalTo(ownername)
          .on('value', snapshot => {
            dispatch({ type: SEARCH_CLIENT_BY_NAME, payload: snapshot.val() })
            // console.log(snapshot.val())
            dispatch(reset('searchform'));
            dispatch({ type: SEARCH_RESET })

        })
     }
  }


  export const searchByState = (state) => {
    return (dispatch) => {
      firebase.database()
      .ref("/")
        .orderByChild("State")
          .equalTo(state)
            .on('value', snapshot => {
              // console.log(snapshot.val())
              // console.log(ownername)
              dispatch({ type: SEARCH_CLIENT_BY_STATE, payload: snapshot.val() })
              dispatch(reset('searchform'));
              dispatch({ type: SEARCH_RESET })
          })
       }
    }


    export const searchByStatus = (statusDropdown) => {
      // console.log(ownername, state, zip)
      return (dispatch) => {
        firebase.database()
        .ref("/")
          .orderByChild("statusUpdate")
            .equalTo(statusDropdown)
              .on('value', snapshot => {
                dispatch({ type: SEARCH_CLIENT_BY_STATUS, payload: snapshot.val() })
                dispatch(reset('searchform'));
                dispatch({ type: SEARCH_RESET })
            })
         }
      }


      export const searchByZip = (zip) => {
        // console.log(ownername, state, zip)
        return (dispatch) => {
          firebase.database()
          .ref("/")
            .orderByChild("Zip")
              .equalTo(zip)
                .on('value', snapshot => {
                  dispatch({ type: SEARCH_CLIENT_BY_ZIP, payload: snapshot.val() })
                  dispatch(reset('searchform'));
                  dispatch({ type: SEARCH_RESET })
              })
           }
        }



  export function noneSelected() {
    return {
      type: NONE_SELECTED
    };
  }
