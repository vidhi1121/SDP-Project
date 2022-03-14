import React from 'react'



const FAQS = () => {
    const manSubmitFormReducer=useSelector(state => state.manSubmitFormReducer)
    const {loading,error,men} = manSubmitFormReducer
  return (
    <div>
    <h1>
    1. How much salary can I expect?
    </h1>
    <p>
    Ans. You can expect a minimum salary of 25,000 INR and can go up to 45,000 INR.
 The salary offered will depend on your skills, experience and performance in the interview.
    </p>
    
    <h1>2. What is the eligibility criteria to apply for this job?</h1>
    <p>
Ans. The candidate should have completed 10th or Below 10th degree and people
 who are freshers are eligible to apply for this job. 
    </p>
        
        
        </div>
  )
}

export default FAQS