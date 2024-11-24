import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Carousel extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner" id="carousel">
                        <div className="carousel-caption" style={{ zIndex: "10" }}>
                            <form className="d-flex">
                                <input className='form-control me-2' type='search' placeholder="Search" aria-label='Search'/>
                                <button className='btn bg-success' type="submit">Search</button>
                            </form> 
                        </div>
                        <div className="carousel-item active">
                            <img src="/img/biryani.avif" className="d-block w-100" style={{ filter: "brightness(30%" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/img/burger.webp" className="d-block w-100" style={{ filter: "brightness(30%" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/img/shawarma.jpg" className="d-block w-100" style={{ filter: "brightness(30%" }} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Carousel