import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import LeftSideNav from '../LeftsideNave/LeftSideNav';
import { Col, Container, Row } from 'react-bootstrap';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <Row>
                <Col lg='4' className='d-none d-lg-block'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg='8'>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Main;