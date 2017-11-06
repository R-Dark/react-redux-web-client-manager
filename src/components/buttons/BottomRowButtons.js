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
          <div style={ styles.twoButtonGroupStyles }>
            <div style={ styles.orderByGroupStyles }>
              <div style={ styles.orderByLabelStyles }>
               <h5>Order:</h5>
              </div>
              <OrderByButton />
            </div>
            <div style={styles.maxGroupStyles}>
              <div style={ styles.maxLabelStyles }>
               <h5>Max:</h5>
              </div>
              <MaxResultsButton />
            </div>
          </div>
          <div style={styles.threeButtonGroupStyles}>
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
        </div>
      );
    }
  }


  const styles = {
    mainDivStyles: {
      display: 'flex',
      justifyContent: 'space-between',
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
      alignItems: 'center',
      paddingRight: 10
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
      display: 'flex'
    },
    threeButtonGroupStyles: {
      display: 'flex'
    },
    twoButtonGroupStyles: {
      display: 'flex'
    }
  };

export default BottomRowButtons
