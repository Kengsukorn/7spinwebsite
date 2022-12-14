import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleHeader from './productservices/TitleHeader';
import ShowProducts from './productservices/ShowProducts';

import { Helmet } from "react-helmet";

function ProductServices() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Product and Services</title>
            </Helmet>
            <TitleHeader />
            <ShowProducts />
        </>
    )
}

export default ProductServices