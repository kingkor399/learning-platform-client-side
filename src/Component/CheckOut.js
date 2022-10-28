import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthPorvider } from '../Context/AuthContext';
import { FaUser } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
const CheckOut = () => {
    const courses = useLoaderData();
    const { title, Fee, duration } = courses
    const { user } = useContext(AuthPorvider);
    return (
        <div className='w-100'>
            {user?.uid ?
                <>
                    <Card style={{ width: '18rem' }} className='mx-auto mt-5'>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>

                            <Card.Text>
                                <p>duration: {duration}</p>

                                <p>Fee: {Fee}</p>
                                <p>Congratulation you buy this {title} course </p>
                            </Card.Text>
                            <Card.Link ><Link to='/' className='text-decoration-none border'>Back to homepage</Link></Card.Link>

                        </Card.Body>
                    </Card>
                </>


                : <><h5 className='text-center'>You don't have an account please  <Link to='/login'>Login</Link></h5></>}
        </div>
    );
};

export default CheckOut;