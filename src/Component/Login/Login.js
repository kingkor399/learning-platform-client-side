import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthPorvider } from '../../Context/AuthContext';
const Login = () => {
    const {logInuser} = useContext(AuthPorvider);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        logInuser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset();
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.error('your email is not verifyed!! please verifyed your email')
                }

            })
            .catch(error => {
                console.error('error', error);
                setError(error.message)
            })
    }
    return (
        <div className='w-50 mx-auto border border-info mt-2 p-2 rounded'>
            <h3 className='text-warning'>Please Login!!</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <Button variant="success" type="submit">
                    Submit
                </Button>
                <p>Already have not account <Link to='/register'>Register</Link></p>
            </Form>
        </div>
    );
};

export default Login;