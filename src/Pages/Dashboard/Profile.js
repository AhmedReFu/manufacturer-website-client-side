import { Result } from 'postcss';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const Profile = () => {

    const [user] = useAuthState(auth);

    const nameUser = user.displayName;
    const handleUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const education = event.target.education.value;
        const location = event.target.location.value;

        const phone = event.target.phone.value;
        const linkdin = event.target.linkdin.value;



        const users = {
            name: name,
            email: email,
            education: education,
            location: location,
            phone: phone,
            linkdin: linkdin
        }

        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.modifiedCount > 0) {
                    toast.success('Profile Update done')
                }
            })

    }


    return (

        <div className=' card bg-indigo-300 lg:w-6/12 w-full flex flex-col items-center py-8 m-4'>

            <h2 className='m-5 text-3xl text-primary'>My Profile</h2>

            <form onSubmit={handleUser}>

                <div className='grid m-5'>

                    <input type="text" name='name' placeholder="Enter Product Name" className="input input-bordered input-secondary w-full max-w-xs " required />

                    <input type="text" name='email' value={user?.email} className="input input-bordered input-secondary w-full max-w-xs p-2 my-2" readOnly required />

                    <input type="text" name='education'
                        placeholder="Add your Education" className="input input-bordered input-secondary w-full max-w-xs p-2 my-2" required />

                    <input type="text" name='location'
                        placeholder="Location" className="input input-bordered input-secondary w-full max-w-xs p-2 my-2" required />

                    <input type="number" name='phone'
                        placeholder="enter phone number" className="input input-bordered input-secondary w-full max-w-xs p-2 my-2" required />



                    <input type="text" name='linkdin' placeholder="Enter Linkdin profile link" className="input input-bordered input-secondary w-full max-w-xs p-2 my-2" required />


                </div>

                <input className='btn my-2 bg-primary m-5' type="submit" value='order' />

            </form>
        </div>

    );
};

export default Profile;