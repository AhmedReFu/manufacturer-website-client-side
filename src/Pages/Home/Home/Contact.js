import React from 'react';
import { toast } from 'react-toastify';



const Contact = () => {
    const contact = event => {
        event.preventDefault()
        event.target.reset()
        toast('Thank you For your message')
    }

    return (
        <div id='contact' className="mt-20 text-center bg-gradient-to-r from-sky-500 to-indigo-500">
            <h3 className=' font-bold text-5xl pt-12 text-white'>Contact US</h3>
            <h2 className='text-4xl text-white mb-10'>Stay connected with us</h2>
            <form onSubmit={contact}>
                <input className='mt-4 p-4 rounded-lg w-80 md:w-96' type="email" name="email" id="" placeholder='Email Address' />
                <br />
                <input className='mt-4 p-4 rounded-lg w-80 md:w-96' type="text" name='subject' placeholder='Subject' />
                <br />
                <textarea className='mt-4 p-4 rounded-lg w-80 md:w-96' name="message" id="" cols="30" rows="5" placeholder='Your Message'></textarea>
                <div className=" py-10 text-center">
                    <button type='submit' className="btn btn-accent text-white font-bold  px-6">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;