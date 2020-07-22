import React from "react";
import {Link} from 'gatsby';
import Layout from '../components/layout'

const Home = () => {
  return (
    <>
    <Layout page='Home'>
      <h1>Hello</h1>
      <h2>Khairah</h2>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
    </>
  )
}

export default Home;
