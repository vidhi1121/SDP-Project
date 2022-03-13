import React,{useEffect,useState} from 'react';
import { Table } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch,useSelector } from 'react-redux';
import { deleteUser, getallUser } from '../../actions/userAction';
import Loader from '../shared/Loader';
import Message from '../shared/Message';

const Userlist = () => {

  const userState = useSelector(state => state.getAllUsersReducer)
  const {loading,error,users} = userState
  const dispatch=useDispatch()
  useEffect(() => {

    dispatch(getallUser())
  },[dispatch])
  return (
    <div>
        <h1>Userlist</h1>
        {loading && (<Loader/>)}
        { error && <Message variant="danger">Error While Fetching Users</Message>}
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>User Id</th>
      <th> Name</th>
      <th>Email</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {users && users.map(user => (
      <tr key={user._id}>
        <td>{user._id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td><AiFillDelete style={{color:'red',cursor:'pointer'}} onClick={() => {dispatch(deleteUser(user._id))} }/></td>
      </tr>
    ))}
  </tbody>
</Table>
        </div>

  )
}

export default Userlist;