import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux';
//import { Link } from 'react-router-dom';

const TermsandConditionScreen = ({history}) => {

  const manSubmitFormReducer=useSelector(state => state.manSubmitFormReducer)
  const {loading,error,men} = manSubmitFormReducer
    const checkout = () => {
        history.push(`/login?redirect=fillform`);
      };
  return (
    <div>
        
        
        <h1>TermsandConditionScreen</h1>

        <Button onClick={checkout}> Fill Form</Button>
    </div>
  )
}

export default TermsandConditionScreen