import React, { Component } from 'react'
import ZipCodeButton from './ZipCodeButton'
import StateButton from './StateButton'

class MiddleRowButtons extends Component {
    render() {
      return (
        <div style={ styles.mainDivStyles }>
          <div style={styles.zipcodeGroupStyles}>
            <div style={ styles.zipcodeLabelStyles }>
             <h5>Zip Code:</h5>
            </div>
            <ZipCodeButton />
          </div>
          <div style={styles.stateGroupStyles}>
            <div style={ styles.stateIDLabelStyles }>
             <h5>State:</h5>
            </div>
            <StateButton />
          </div>
        </div>
      );
    }
  }


  const styles = {
    mainDivStyles: {
      display: 'flex',
      justifyContent: 'flex-start',
      paddingBottom: 9,
      color: '#171717'
    },
    zipcodeGroupStyles: {
      display: 'flex',
      paddingRight: 40
    },
    zipcodeLabelStyles: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: 10
    },
    stateGroupStyles: {
      display: 'flex',
      paddingRight: 40
    },
    stateIDLabelStyles: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: 10
    }
  };

export default MiddleRowButtons
