import React,{Component} from 'react';
import {Media} from 'reactstrap';


class Event extends Component{
    render(){
        return(
            <div className='container'>
        <div className='row row-content'>
        <div className='col-12 col-md-9 mt-3'>
        <img src="/birthday.png" alt="image" />
            </div>
            </div>
            <div className='row row-content'>
                <h1 className='eheading'>Birthday Bash</h1>
                <p class='etext'>Hosted by <bold>Elysia</bold></p>
            </div>
            <div className='row'>
            <div className='calender col-12 col-md-9 mt-3'>
                <span className='calender'>
                <img className='image'  src="/calender.png" alt="image" />
                <div>
                <h1>18 August 6pm</h1>
                <p>to 19 August 1:00PM UTC+10</p>
                </div>
                
                </span>
                
                </div>  
                <div className='calender col-12 col-md-9 mt-3'>
                <span className='calender'>
                <img className='image'  src="/address.jpg" alt="image" />
                <div>
                <h1>Street Name</h1>
                <p>Suburb, State, Postcode</p>
                </div>
                
                </span>
                
                </div> 
            </div>
        </div>
        );
    }
}

export default Event;