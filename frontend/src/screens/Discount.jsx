class ErrorBoundary extends React.Component {
    state = { error: null, errorInfo: null };

    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }

    render() {
      if (this.state.errorInfo) {
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: "pre-wrap" }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }

      return this.props.children;
    }
  }
  const Discount = () =>{
    if (order.totalPrice < 500)
    {
      return (<Message variant="danger">
      Sorry...we not give any kind of discount 
    </Message>);
    }
    else if(order.totalPrice >= 500 && order.totalPrice < 1000)
    {
      return (<Message variant="success">
                we  give 5% discount 
                  <Row>

                  <Col>Final Price</Col>
                  <Col>₹{order.totalPrice * 95 /100}</Col>
                  
                </Row> </Message>
               );
    }
    else if(order.totalPrice <= 1000 && order.totalPrice < 2000)
    {
      return (
                  <Row>
                  <Col>Final Price</Col>
                  <Col>₹{order.totalPrice * 90 /100}</Col>
                  <Message variant="success">
                  we  give 10% discount</Message>
                </Row> 
                );
    }
    else if(order.totalPrice >= 2000) {
     return ( <Message variant="success">
      we  give 15% discount
      <Row>
      <Col>Final Price</Col>
      <Col>₹{order.totalPrice * 85 /100}</Col>
    </Row> 
    </Message>);
    }
    else{}
  }
  