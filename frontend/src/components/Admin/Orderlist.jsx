import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import { deliverOrders, getAllOrders } from '../../actions/orderAction';
import Loader from '../shared/Loader';
import Message from '../shared/Message';

const Orderlist = () => {

  const allordersState = useSelector(state => state.allUserOrdersReducer)
  const {loading,orders,error} = allordersState
  const dispatch=useDispatch()
  useEffect(() => {


    dispatch(getAllOrders())
  },[dispatch])

 
  return (
    <div><h1>Orderlist</h1>
    {loading && (<Loader />)}
    { error && <Message variant="danger">Admin Order req fail</Message>}
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Order Id</th>
      <th>Email</th>
      <th>User Id</th>
      <th>Amount</th>
      <th>Date</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
   {orders && orders.map(order => (
     <tr key={order._id}>
       <td>{order._id}</td>
       <td>{order.email}</td>
       <td>{order.user}</td>
       <td>₹{order.totalPrice} </td>
       <td>{order.createdAt.substring(0,10)}</td>
       <td>{order.isDeliverd ? (<h6 className='text-success'>Deliverd</h6>) : (<><Button className='btn-danger' onClick={() => {dispatch(deliverOrders(order._id))}}>Deliver</Button></>)}</td>
     </tr>
   ))}
  </tbody>
</Table>
    </div>
  )
}

export default Orderlist;