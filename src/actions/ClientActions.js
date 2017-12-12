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
