import React from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../actions'
import { Button } from 'reactstrap';


const BatchAndReportButtons = props => {
    return (
      <div style={ styles.BatchAndReportButtons}>
        <div >
          <Button color="success" id='run-batch' action="submit" block >
            Run Batch
          </Button>
        </div>

        <div>
          <Button color="success" id='run-button' action="submit" block >
            Run Report
          </Button>
        </div>
      </div>
    )
  }

  const styles = {
    BatchAndReportButtons: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    MiddleRowButtons: {
      display: 'flex',
      flexDirection: 'row'
    }
  };

 export default reduxForm({
   form: 'batchandreportbuttons' // a unique identifier for this form
 }, null, actions)(BatchAndReportButtons)
