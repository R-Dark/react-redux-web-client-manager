import React from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../actions'
import { Button } from 'reactstrap';

const PackageButton = props => {
    return (
      <div style={ styles.BatchAndReportButtons}>

          <Button onClick={props.onClick} color="primary" id='run-button' action="submit" block style={ styles.Buttons} >
            Run Package
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
   form: 'packagebutton' // a unique identifier for this form
 }, null, actions)(PackageButton)
