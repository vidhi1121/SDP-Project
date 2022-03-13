import React,{useEffect} from 'react';
import {Row,Col,Container,Button,ButtonGroup} from 'react-bootstrap';
import {useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AddNewVeggies from '../components/Admin/AddNewVeggies';
import EditVeggies from '../components/Admin/EditVeggies';
import HireMan from '../components/Admin/HireMan';
import Orderlist from '../components/Admin/Orderlist';
import Userlist from '../components/Admin/Userlist';
import Veggieslist from '../components/Admin/Veggieslist';

const AdminScreen = ({history}) => {

const userLogin = useSelector((state) => state.userLogin)
const { userInfo } = userLogin;

useEffect(() => {

    if(localStorage.getItem('userInfo') === null || !userInfo.isAdmin){
        window.location.href ="/"
    }
},[])




  return (
   < >
   <Container>
  
   <Row>
   <h1 className='text-center bg-dark text-light p-2'>Admin Panel</h1>
<Col md={2}>
<ButtonGroup vertical style={{minHeight : "400px"}}>
  <Button onClick={() => history.push('/admin/userlist')}>All Users</Button>
  <Button onClick={() => history.push('/admin/veggieslist')}>All Vegetables</Button>
  <Button onClick={() => history.push('/admin/addnewveggies')}>Add New Vegetables</Button>
  <Button onClick={() => history.push('/admin/orderlist')}>All Orders</Button>
  <Button onClick={() => history.push('/admin/hireman')} >All Request</Button>
 
</ButtonGroup>
</Col>
<Col md={10}>
    <Switch>
        <Route exact path='/admin' component={Userlist} />
        <Route exact path="/admin/userlist"  component={Userlist}  />
        <Route exact path="/admin/veggieslist"  component={Veggieslist}  />
        <Route exact path="/admin/addnewveggies" component={AddNewVeggies}  />
        <Route exact  path="/admin/orderlist"  component={Orderlist}  />
        <Route exact  path="/admin/editveggies/:vegId"  component={EditVeggies}/>
        <Route exact  path="/admin/hireman"  component={HireMan}/>
    </Switch>
</Col>

   </Row>
   </Container>
   </>
  )
}

export default AdminScreen;