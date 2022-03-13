import React, { useEffect } from "react";
// import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, listProducts } from "../../actions/productActions";
import {Row,Col,Container,Table} from "react-bootstrap";
import Loader from '../../components/shared/Loader';
import Message from '../../components/shared/Message';
import Productscreen from '../../screens/Productscreen';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import { Link } from "react-router-dom";

const Veggieslist = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
      }, [dispatch]);
  return (
    <>
     {loading ? (
        <Loader />
        // <h2>Loading..</h2>
      ) : error ? (
        //   <h2>{error}</h2>
        <Message variant="danger">{error}</Message>
      ) : (
        // <Row>
        //   {products.map((product) => (
        //     <Col key={product._id} md={3}>
        //       <Productscreen product={product} />
        //     </Col>
        //   ))}
        // </Row>

        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Image</th>
      <th>Veggies Name</th>
      <th>Prices</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        products.map((product) => (
                <tr>
                     <td>
                     <img src={product.image}  alt="logo" width="50px" height="50px"/>
                    </td>
                    <td>
                        {product.name}
                    </td>
                    <td>
                        {product.price}
                    </td>
                    <td>
                      <Link to={`/admin/editveggies/${product._id}`}>
                      <AiFillEdit style={{cursor:"pointer"}}/>
                      </Link>
                         &nbsp; <AiFillDelete style={{color:'red',cursor:'pointer'}} onClick={() => {dispatch(deleteProduct(product._id))}} />
                    </td>
                </tr>
              ))
    }
  </tbody>
</Table>
        </div>
      )}
    </>
  )
}

export default Veggieslist;