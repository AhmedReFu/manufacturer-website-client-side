import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full py-12">
            <div id="slide1" className="carousel-item relative h-96 w-full">
                <img alt='' src="https://i.ibb.co/CV5xMWw/corsair-cx550m-semi-modular-atx-power-supply-price-in-bd-jpg-550x550w.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative h-96 w-full">
                <img alt='' src="https://i.ibb.co/25VYXHQ/viewsonic-xg2405-24-inch-144hz-monitor-review-png-550x550.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative h-96 w-full">
                <img alt='' src="https://i.ibb.co/1bFR7f9/DEEPCOOL-MATREXX-55-MESH-Case-8-jpg-550x550.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative h-96 w-full">
                <img alt='' src="https://i.ibb.co/VTtZHYL/msi-b560m-a-pro-motherboard-1-jpg-550x550.jpg" className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>

            </div>
        </div>
    );
};

export default Banner;