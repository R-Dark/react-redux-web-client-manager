import React, { Component } from 'react'
import RunButton from './RunButton'
import SequenceIDButton from './SequenceIDButton'
import StatusButton from './StatusButton'
import BuyerNameButton from './BuyerNameButton'




class TopRowButtons extends Component {
    render() {
      return (
        <div style={ styles.mainDivStyles }>
          <div style={styles.runGroupStyles}>
            <div style={ styles.runLabelStyles }>
             <h5>Run:</h5>
            </div>
            <RunButton />
          </div>
          <div style={styles.buyerNameGroupStyles}>
            <div style={ styles.buyerNameLabelStyles }>
             <h5>Buyer:</h5>
            </div>
            <BuyerNameButton />
          </div>
          <div style={styles.statusGroupStyles}>
            <div style={ styles.statusNameLabelStyles }>
             <h5>Status:</h5>
            </div>
            <StatusButton />
          </div>
          <div style={styles.sequenceIDGroupStyles}>
            <div style={ styles.sequenceIDLabelStyles }>
             <h5>Sequence:</h5>
            </div>
            <SequenceIDButton />
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
    runGroupStyles: {
      display: 'flex',
      paddingRight: 40
    },
    runLabelStyles: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: 10
    },
    sequenceIDGroupStyles: {
      display: 'flex',
      paddingRight: 40
    },
    sequenceIDLabelStyles: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: 10
    },
    buyerNameGroupStyles: {
      display: 'flex',
      paddingRight: 40
    },
    buyerNameLabelStyles: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: 10
    },
    statusGroupStyles: {
      display: 'flex',
      paddingRight: 40
    },
    statusNameLabelStyles: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: 10
    }
  };

export default TopRowButtons
