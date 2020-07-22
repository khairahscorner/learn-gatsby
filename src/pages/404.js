import React from 'react'
import {Link} from 'gatsby';
import Layout from '../components/layout';

const NotFound = () => {
    return (
        <Layout page='404'>
            <h1>Page Not Found</h1>
            <Link to="/">Go to Home</Link>
        </Layout>
    )
}
export default NotFound