import React from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../actions'
import { Button } from 'reactstrap';

const BatchAndReportButtons = props => {
    return (
      <div style={ styles.BatchAndReportButtons}>
        <div >
          <Button color="primary" id='run-batch' action="submit" block style={ styles.Buttons}  >
            Run Batch
          </Button>
        </div>

        <div>
          <Button color="primary" id='run-button' action="submit" block style={ styles.Buttons} >
            Run Report
          </Button>
        </div>

        <div>
          <Button color="primary" id='package-button' action="submit" block style={ styles.Buttons} >
            Run Package
          </Button>
        </div>

      </div>
    )
  }

  const styles = {
    BatchAndReportButtons: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      marginLeft: 100,
      paddingRight: 50
    },
    Buttons: {
      paddingLeft: 50,
      paddingRight: 50,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: '#ced4da',
    }
  };

 export default reduxForm({
   form: 'batchandreportbuttons' // a unique identifier for this form
 }, null, actions)(BatchAndReportButtons)
