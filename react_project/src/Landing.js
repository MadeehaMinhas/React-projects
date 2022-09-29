
import React,{Component} from 'react';
import {Form,Button,Input,Label,Row,Col} from 'reactstrap';
import Event from './event';
import Create from './create';
import {Link} from 'react-router-dom';


class Landing extends Component{
  
    render(){
      

        return(
            <div className='container'>
            <div className='row row-content'>
            <div className='col-12 col-md-9 mt-3'>
          <h1 className="first">Imagine if <span>Snapchat</span> had events</h1>
          
          <p>Easily host and share events with your friends across any social media</p>
          </div>
    
          </div>
          <div className='row'>
          <div className='col-12 col-md-9 mt-3'>
          <img src="/movie.png" alt="image" />
            </div>
          </div>
          <Link to='/create'>
          <Button className='landing' ><span className="fa fa-party-horn"></span>Create my event</Button></Link>
        
          </div>
        
      
        );
    }
}

export default Landing;