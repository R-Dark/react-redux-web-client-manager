import React, { Component } from 'react'
import RunButton from './RunButton'

class TopRowButtons extends Component {
    render() {
      return (
      <div style={styles.runGroupStyles}>
        <div style={ styles.runLabelStyles }>
         <h5>Run:</h5>
        </div>
        <RunButton />
      </div>
      );
    }
  }

  const styles = {
    runGroupStyles: {
      display: 'flex',
      justifyContent: 'flex-start',
      paddingBottom: 20,
      color: '#171717'
    },
    runLabelStyles: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: 10
    }
  };

export default TopRowButtons
