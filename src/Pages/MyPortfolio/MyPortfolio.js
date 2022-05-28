import React from 'react';


const Portfolio = () => {
    return (
        <div className='flex justify-center font-bold'>
            <div className="card w-6/12 bg-base-100 text-primary shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Portfolio</h2>
                    <h1>NAME  : MD. NAZMUL ISLAM</h1>
                    <h1>Email  : mdnazmulkhanfeni@gmail.com</h1>
                    <h1>EDUCATION BACKGROUND : DEPLOMA IN ENGINEERING COMPUTER</h1>
                    <h2>LIST OF TECHNOLOGY : js , html , css , bootstrap , tailwind , React , REACT ROUTER , DAISYui , Firebase ,  git etc..</h2>

                    <h2 className='text-2xl '>LIVE SITS LINK OF PROJECTS : </h2>
                    <a href='https://book-house-management.netlify.app/' target='_blank' class="my-2 text-xl link link-primary">Book House Buy Book</a><br></br>
                    <a href='https://ahmed-refu-center.netlify.app/' target='_blank' class="my-2 text-xl link link-primary">Ahmed ReFu Convention Center</a><br></br>
                    <a href='https://stylish-shoes-shopping.netlify.app/' target='_blank' class="my-2 text-xl link link-primary">Stylish Shoes Shopping
                    </a><br></br>
                    <a href='https://genius-car-services-6f2a2.web.app/' target='_blank' class="my-2 text-xl link link-primary">Genius Car Service
                    </a>

                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;