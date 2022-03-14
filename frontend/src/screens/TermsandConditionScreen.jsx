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
      const check = () => {
        history.push("/faqs");
    };
  return (
    <div>
        
        
        <h1>Join Our Community</h1>
        <p>
        Veggies is aggressively hiring for the job profile of Delivery man Biker.
        Ideal candidate should be ready to do delivery package around their area 
        with own vehicle and some basic knowledge of locality.
        Kindly go through the FAQs below to get all answers related to the given job.
        Apply directly online using fill form button and will get back to you after 
        review your profile. Email will be sent to you on your email address.
        </p>
        <button type="submit" className="btn btn-cust"  onClick={check} >FAQS</button>
        

        <Button onClick={checkout}> Fill Form</Button>
    </div>
  )
}

export default TermsandConditionScreen