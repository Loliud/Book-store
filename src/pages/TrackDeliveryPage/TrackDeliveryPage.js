import React, {Component} from 'react';
import './style.css';


class TrackDeliveryPage extends Component{
    render(){
        return(
            <div className="delivery">
                <div className="header">
                    <img src="http://pngimg.com/uploads/book/book_PNG51019.png" alt="item"></img>
                    <h1>I read <span>a book</span> one day and my whole life was <span>changed !</span></h1>
                </div>
                <h1 style={{fontWeight: 'bold', textShadow: '0px 0px 5px rgba(0,0,0,0.4)', marginBottom: '3rem'}}>Your order delivery status</h1>
                <h4>Destination Country: <span>Vietnam</span></h4>
                <div id="progress">
                    <div><i className="fas fa-check"></i></div>
                    <div id="car-progress"><i className="fas fa-truck"></i></div>
                    <div><i className="fas fa-check"></i></div>
                    <div></div>
                    <div></div>
                </div>
                <h4 style={{marginTop: '10rem', fontWeight: 'bold'}}>Your item arrived at Hanoi in Vietnam on July 10, 2019 at 8:45 am</h4>
            </div>
        )
    }
}


export default TrackDeliveryPage;