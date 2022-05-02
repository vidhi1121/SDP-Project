import React,{useState} from 'react';
import {Form,Row,Col,Button} from 'react-bootstrap';
import {addProducts} from '../../actions/productActions';
import { useDispatch ,useSelector} from 'react-redux';
import Loader from '../shared/Loader';
import Message from '../shared/Message';

const AddNewVeggies = () => {

    const [name,setname] = useState('')
    const [price,setprice] = useState()
    const [image,setimage] = useState('')
    const [description,setdescription] = useState('')
    const [countInStock,setcountinstock] = useState()
    const [rating] = useState()
    const [numreviews] =useState()

const addProductState = useSelector(state => state.addproductReducer)
const {loading,error,success}=addProductState;

    const dispatch = useDispatch();
  
    const submitForm =(e) =>{

        //console.log(e)
        e.preventDefault();
        const product = {
            name,image,description,countInStock,price,numreviews,rating
            
        }
       // console.log(product)
       dispatch(addProducts(product));
    }
  return (
    <div>
        {
            loading && (<Loader/>)
        }
         { error && <Message variant="danger">Add new veggies error</Message>}
        {/* {error && (<Message variant="danger" error = "add new veggies error"/>)} 
     {success && (<Message variant="success" success="veggies edit successfully"/>)} */}
        {success && <Message variant="success">Veggies Added successfully</Message>}
       
    <Form onSubmit={submitForm} className="bg-light p-4">
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="Enter name" />
    </Form.Group>

    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Price</Form.Label>
      <Form.Control type="text" value={price} onChange={(e) => setprice(e.target.value)} placeholder="Enter Price" />
    </Form.Group>

    {/* <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group> */}
  </Row>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Image</Form.Label>
      
      <Form.Control type="url" value={image} onChange={(e) => setimage(e.target.value)}  placeholder="Add Image URL" />
      
    </Form.Group>
 

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" value={description} onChange={(e) => setdescription(e.target.value)} placeholder="Enter description" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Stock</Form.Label>
    <Form.Control type="text" value={countInStock} onChange={(e) => setcountinstock(e.target.value)} placeholder="Enter Stock" />
  </Form.Group>

  </Row>

  <Button variant="primary" type='submit'>
    Add New
  </Button>
</Form>
    </div>
  )
}

export default AddNewVeggies;