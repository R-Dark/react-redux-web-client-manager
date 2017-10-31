import React, { Component } from 'react'
import OrderByButton from './OrderByButton'
import MaxResultsButton from './MaxResultsButton'
import SearchButton from './SearchButton'
import BatchButton from './BatchButton'
import RunReportButton from './RunReportButton'


class BottomRowButtons extends Component {
    render() {
      return (
        <div style={ styles.mainDivStyles }>
          <div style={styles.orderByGroupStyles}>
            <div style={ styles.orderByLabelStyles }>
             <h5>Order By:</h5>
            </div>
            <OrderByButton />
          </div>
          <div style={styles.maxGroupStyles}>
            <div style={ styles.maxLabelStyles }>
             <h5>Max Results:</h5>
            </div>
            <MaxResultsButton />
          </div>
          <div style={styles.searchGroupStyles}>
            <SearchButton />
          </div>
          <div style={styles.batchGroupStyles}>
            <BatchButton />
          </div>
          <div style={styles.runReportGroupStyles}>
            <RunReportButton />
          </div>
        </div>
      );
    }
  }


  const styles = {
    mainDivStyles: {
      display: 'flex',
      justifyContent: 'flex-start',
      color: '#171717'
    },
    orderByGroupStyles: {
      display: 'flex',
      paddingRight: 40
    },
    orderByLabelStyles: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: 10
    },
    maxGroupStyles: {
      display: 'flex',
      paddingRight: 40
    },
    maxLabelStyles: {
      display: 'flex',
      alignItems: 'center'
    },
    searchGroupStyles: {
      display: 'flex',
      paddingRight: 40
    },
    batchGroupStyles: {
      display: 'flex',
      paddingRight: 40
    },
    runReportGroupStyles: {
      display: 'flex',
      paddingRight: 40
    }
  };

export default BottomRowButtons
