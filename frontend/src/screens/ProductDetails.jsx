import React, { useState, useEffect } from 'react';
import Product from '../products'
// import axios from 'axios'
import Rating from '../components/Rating';
import {Row, Col, ListGroup, Button, Image, ListGroupItem, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { createProductReview, listProductDetails } from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstant';
import Message from '../components/shared/Message';

const Productdetails = ({history, match}) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(match.params.id));
      }, [dispatch, match]);
    // const product = Product.find((p) => p._id === match.params.id);
    // const [Products, setProducts] = useState([])
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const {data} = await axios.get(`/products/${match.params.id}`)
    //         setProducts(data)
    //     }
    //     fetchProducts()
    // },[])
    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`);
      };
      const userLogin = useSelector((state) => state.userLogin)
      const { userInfo } = userLogin

      const [rating, setRating] = useState(0)
      const [comment, setComment] = useState('')

      const productReviewCreate = useSelector((state) => state.productReviewCreate)
  const {
    success: successProductReview,
    error: errorProductReview,
  } = productReviewCreate

  useEffect(() => {
    if (successProductReview) {
      alert('Review Submitted!')
      setRating(0)
      setComment('')
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }
    dispatch(listProductDetails(match.params.id))
   }, [dispatch, match, successProductReview])

   const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    )
  }

  return (
  <div>
      <Link to="/home" className="btn btn-light"> 
      <i class="fas fa-arrow-left"></i>
     &nbsp; GO BACK
      </Link>
      <Row>
          <Col md={6}>
          <Image src={product.image} alt={product.name} fluid/>
          
          </Col>
          <Col md={3}>
              <ListGroup varient="flush">
                  <ListGroupItem>
                      <h3>{product.name}</h3>
                  </ListGroupItem>
                <ListGroupItem>
                    <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
                </ListGroupItem>
                <ListGroupItem>
                    Price : ₹{product.price}
                </ListGroupItem>
                
              </ListGroup>
          </Col>
          <Col md={3}>
              <ListGroupItem>
                  <Row>
                      <Col>Status:</Col>
                      <Col>
                      {product.countInStock>0 ? 'In Stock' :'Out of Stock'}
                      </Col>
                  </Row>
                  </ListGroupItem>
                  {product.countInStock > 0 && (
            <ListGroupItem>
              <Row>
                <Col>Qty</Col>
                <Form.Control
                  as="select"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Control>
              </Row>
            </ListGroupItem>
          )}
                  <ListGroupItem>
                      <Button className="btn-block" type="button" onClick={addToCartHandler}>Add to cart</Button>
                  </ListGroupItem>
              {/* </ListGroupItem> */}
          </Col>
      </Row>
      <Row>
        <Col>
        <ListGroupItem>
                    {product.description}
                    <p></p>
                    <p>You have to buy the minimum Rs.200 of vegetables.
                      <br/> Price of vegetables mentioned here is per KGs.
                    <br/>Here 1 kg = 1 qty.</p>
                    <h4>Offers</h4>
                    <p>You will get 5% discount everytime when your order is greater then 1000 
                    <br/> Up to 7.5% Cashback with HDFC Bank Credit Cards. </p>
                </ListGroupItem>
        </Col>
      </Row>
      <Row>
          <Col md={6}>
            <h2>Reviews</h2>
            {product.reviews.length === 0 && <Message>No Reviews</Message>}
               <ListGroup variant='flush'>
                 {product.reviews.map((review) => (
                   <ListGroup.Item key={review._id}>
                     <strong>{review.name}</strong>
                     <Rating value={review.rating} />
                     <p>{review.createdAt.substring(0, 10)}</p>
                     <p>{review.comment}</p>
                   </ListGroup.Item>
                 ))}
                 <ListGroup.Item>
                 {errorProductReview && (
                     <Message variant='danger'>{errorProductReview}</Message>
                   )}
                   {userInfo ? (
                     <form className="form" onSubmit={submitHandler}>
                     <div>
                       <h2>Write a customer review</h2>
                     </div>
                     <div>
                       <label htmlFor="rating">Rating</label>
                       <select id="rating" value={rating}
                        onChange={(e) => setRating(e.target.value)}>
                           <option value="">Select</option>
                           <option value="1">1- Bad</option>
                           <option value="2">2- Fair</option>
                           <option value="3">3- Good</option>
                           <option value="4">4- Very good</option>
                           <option value="5">5- Excelent</option>

                       </select>
                     </div>
                       <div>
                       <label htmlFor="comment">Comment</label>
                       <textarea
                         id="comment"
                         value={comment}
                         onChange={(e) => setComment(e.target.value)}
                       ></textarea>
                     </div>
                    
                     <div>
                       <label />
                       <button className="primary" type="submit">
                         Submit
                       </button>
                     </div>
                     
                   </form>
                     
                   ) : (<Message>Please <Link to='/login'
                   >sign in</Link>to write a review</Message>)}
                   
                 </ListGroup.Item>
              </ListGroup>
              

          </Col>
        </Row>

  </div>
  )
};

export default Productdetails;