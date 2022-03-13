import React,{useEffect,useState} from 'react'
import {Row, Col, Table } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { getallMen } from '../actions/hiringmanAction'

const RequestDetails = () => {
    const getAllMenReducer = useSelector(state => state.getAllMenReducer)
    const { men } = getAllMenReducer

    const dispatch=useDispatch()
    useEffect(() => {
  
      dispatch(getallMen())
    },[dispatch])
  return (
    <div>
        <h1>FORM REQUEST STATUS</h1>
        <Row>
            <Col>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>

          <th>Username</th>
          <th>Email</th>
          <th>DATE</th>
          <th>APPROVED</th>
        </tr>
      </thead>
      <tbody>
        {men && men.map(man => (
          <tr key={man._id} >

            <td>{man.firstname}</td>
            <td>{man.email}</td>
            <td>{man.createdAt?.substring(0, 10)}</td>
            <td> {man.isApprove ? (

              <h5 className='text-success'>Approved</h5>
            ) : (
              <i
                className="fas fa-times"
                style={{ color: "red" }}
              ></i>
            )}</td>

          </tr>

        ))}


      </tbody>
    </Table>
    </Col>
        </Row>
    </div>
  )
}

export default RequestDetails