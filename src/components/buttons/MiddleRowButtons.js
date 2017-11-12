import React, { Component } from 'react'
import ZipCodeButton from './ZipCodeButton'
import StateButton from './StateButton'
import OwnerNameButton from './OwnerNameButton'


class MiddleRowButtons extends Component {

  onOwnerTextUpdate(text) {
    console.log(text)
  }

    render() {
      return (
        <div style={ styles.mainDivStyles }>
          <div style={styles.ownerNameGroupStyles}>
            <div style={ styles.ownerNameLabelStyles }>
             <h5>Owner:</h5>
            </div>
            <OwnerNameButton />
          </div>
          <div style={styles.stateGroupStyles}>
            <div style={ styles.stateIDLabelStyles }>
             <h5>State:</h5>
            </div>
            <StateButton />
          </div>
          <div style={styles.zipcodeGroupStyles}>
            <div style={ styles.zipcodeLabelStyles }>
             <h5>Zip:</h5>
            </div>
            <ZipCodeButton />
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
    },
    ownerNameGroupStyles: {
      display: 'flex',
      paddingRight: 40
    },
    ownerNameLabelStyles: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: 10
    }
  };

export default MiddleRowButtons
