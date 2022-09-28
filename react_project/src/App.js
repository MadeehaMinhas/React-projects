import './App.css';
import React,{Component} from 'react';
import {Form,Button,Input,Label,Row,Col} from 'reactstrap';


class App extends Component {
  render(){
  return (
    <div className="App">
      <div className='container'>
        <div className='row row-content'>
        <div className='col-12 col-md-9 mt-3'>
      <Form>
        <Row className="form-group">
      
     
        <Col >
      <Input 
        id="Todo"
        name="todo"
        placeholder="Enter your todos here!"
        type="text"
      />
    
      <Button  >Add</Button>
      </Col>
    
    </Row>
       

      </Form>
      </div>
      </div>
      </div>
    
    </div>
  );
}
}

export default App;
