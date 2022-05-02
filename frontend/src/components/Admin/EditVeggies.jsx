import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getProductById, updateProduct } from '../../actions/productActions';
import {Form,Row,Col,Button} from 'react-bootstrap';
import Loader from '../shared/Loader';
import Message from '../shared/Message';

const EditVeggies = ({match}) => {
    const [name,setname] = useState('')
    const [price,setprice] = useState()
    const [image,setimage] = useState('')
    const [description,setdescription] = useState('')
    const [countinstock,setcountinstock] = useState()
    const [rating,setrating] = useState()
    const [numreviews,setnumreviews] =useState()

    const dispatch=useDispatch()
    const getProductByState = useSelector(state => state.getproductByIdReducer)
    const {error,product} =getProductByState;

    const updatePrductState = useSelector(state => state.updateproductByIdReducer)
    const {updateloading} = updatePrductState

    useEffect(() => {

        if (product) {
            if (product._id === match.params.vegId) {
              setname(product.name);
              setdescription(product.description)
              setprice(product.price)
              setimage(product.image)
              setcountinstock(product.countInStock)
              setrating(product.rating)
              setnumreviews(product.numReviews)
              
            } else {
              dispatch(getProductById(match.params.vegId));
            }
          } else {
            dispatch(getProductById(match.params.vegId));
          }
        }, [product, dispatch, match.params.vegId]);

    const submitForm =(e) =>{

        //console.log(e)
        e.preventDefault();
        const updatedproduct = {
            _id:match.params.vegId,
            name,image,description,countinstock,price,numreviews,rating
            
        }
       // console.log(product)
       dispatch(updateProduct(updatedproduct));
    }

  return (
    <div>
        {
            updateloading && (<Loader/>)
        }
         { error && <Message variant="danger">Add new veggies error</Message>}

       
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
    <Form.Control type="text" value={countinstock} onChange={(e) => setcountinstock(e.target.value)} placeholder="Enter Stock" />
  </Form.Group>

  </Row>

  <Button variant="primary" type='submit'>
    Update Veg
  </Button>
</Form>
        </div>
  )
}

export default EditVeggies;