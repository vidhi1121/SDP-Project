import React,{useEffect} from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch,useSelector } from 'react-redux'
import { approveRequest, deleteMan, getallMen } from '../../actions/hiringmanAction'
import Loader from '../shared/Loader'
import Message from '../shared/Message'

const HireMan = () => {

   
  //   const hireState = useSelector(state=>state.hiringManReducer)
  //  const {loading,men,error} =hireState

  const manState = useSelector(state => state.getAllMenReducer)
  const {loading,error,men} = manState
  const dispatch=useDispatch()
  useEffect(() => {

    dispatch(getallMen())
  },[dispatch])
 
  return (
    <div><h1>HireMan</h1>
    
        
        {loading && (<Loader/>)}
        { error && <Message variant="danger">Error While Fetching Men Request</Message>}
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Man Id</th>
      <th> Name</th>
      <th>Email</th>
      <th>Status</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {men && men.map(man => (
      <tr key={man._id}>
        <td>{man._id}</td>
        <td>{man.firstname}</td>
        <td>{man.email}</td>
        <td>{man.isApprove ? (<h6 className='text-success'>Approved</h6>) : (<><Button className='btn-danger' onClick={() => {dispatch(approveRequest(man._id))}}>Approved</Button></>)}</td>
        <td><AiFillDelete style={{color:'red',cursor:'pointer'}} onClick={() => {dispatch(deleteMan(man._id))} }/></td>    
      </tr>
    ))}
  </tbody>
</Table>
        
    </div>
  )
}

export default HireMan