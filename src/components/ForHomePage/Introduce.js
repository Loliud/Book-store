import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';
import './css/Introduce.css';



const items = [
    {
        src: 'http://pngimg.com/uploads/student/student_PNG62523.png',
        id: 1,
    },
    {
        src: 'http://pngimg.com/uploads/man/man_PNG6512.png',
        id: 2,
    },
    {
        src: 'http://pngimg.com/uploads/student/student_PNG57.png',
        id: 3,
    }
];

class Introduce extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

    }



    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }





    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item, index) => {
            return (
                <CarouselItem key={index}
                    className="custom-tag"
                >
                    <div className="content">
                        <div className="description">
                            <h1>Reading one <span>Book</span></h1>
                            <h1>is like <span>Eating</span></h1>
                            <h1>one <span>Potato Chip</span></h1>
                        </div>
                        <img src={item.src} alt="item"></img>
                    </div>
                    <div className="button">
                        <button className="move" id="pre" onClick={this.previous}><i className="fas fa-arrow-left"></i></button>
                        <button className="move" id="next" onClick={this.next} ><i className="fas fa-arrow-right"></i></button>
                    </div>

                </CarouselItem>
            );
        });

        return (
            <div className="introduce" id="introduce">
                <style>
                    {
                        `.custom-tag {
                            position: relative;
                            max-width: 100%;
                            height: 100vh;
                            background: #f1f1f1;
                          }`
                    }
                </style>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators className="active-icon" items={items} activeIndex={activeIndex} />
                    {slides}
                </Carousel>
            </div>
        );
    }
}

export default Introduce;