import React,{Component} from 'react';
import {Media} from 'reactstrap';
import {Form,Button,Input,Label,Row,Col} from 'reactstrap';
import {Link} from 'react-router-dom';


class Create extends Component{
    render(){
        return(
            <div className='container'>
        <div className='row row-content'>
        <div className='col-12 col-md-9 mt-3'>
        <div className='calender col-12 col-md-9 mt-3'>
                <span className='calender'>
                <img className='image'  src="/birthday.png" alt="image" />
                <div>
                <h1>Event Name</h1>
                <h2>Host Name</h2>
                <p>From 29 August, to 4 November</p>
                </div>
                
                </span>
                
                </div> 

                <Link to='/event'>
                <Button className='landing'>Next</Button></Link>
                
                </div> 
            </div>
        </div>
        );
    }
}

export default Create;