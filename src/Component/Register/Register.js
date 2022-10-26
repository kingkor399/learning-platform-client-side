import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { AuthPorvider } from '../../Context/AuthContext';

const Register = () => {
    const { createUser,updateUserProfile,emailVerification } = useContext(AuthPorvider);
    const [error, setError] = useState('');
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        
        if(password !== confirm){
            setError("password doesn't match");
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset();
                handleUpdateProfile(name,photoURL)
                handleVerification();
                toast.success('Please verify your email addrres')
            })
            .catch(error => {
                console.error('error', error);
                setError(error.message);
            })
    }
    const handleUpdateProfile = (name,photoURL) =>{
        const profile = {
            displayName : name,
            photoURL : photoURL
        }
        updateUserProfile(profile)
        .then(() =>{})
        .catch(error =>{
            console.error('error',error)
        })
    }

    const handleVerification = () =>{
        emailVerification()
        .then(() =>{})
        .catch(error =>{
            console.error('error',error);
        })
    }

    return (
        <div className='w-25 mx-auto border border-info mt-2 p-2 rounded'>
            <h3 className='text-warning'>Please Register!!</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirm' placeholder="confirm Password" required />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;