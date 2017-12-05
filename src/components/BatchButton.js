import React from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../actions'
import { Button } from 'reactstrap';

const BatchButton = props => {
    return (
      <div style={ styles.BatchAndReportButtons}>

          <Button onClick={props.onClick} color="primary" id='run-batch' action="submit" block style={ styles.Buttons}  >
            Run Batch
          </Button>

      </div>
    )
  }

  const styles = {
    BatchAndReportButtons: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      marginLeft: 100
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
   form: 'batchbutton' // a unique identifier for this form
 }, null, actions)(BatchButton)
