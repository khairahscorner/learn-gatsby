import React from "react";
import {Link} from 'gatsby';
import Layout from '../components/layout'


const About = () => {
  return (
    <Layout page='About'>
        <h1>ABOUT</h1>
        <p>I'm a web dev</p>
        <Link to="/contact">Contact Me</Link>
    </Layout>
  )
}

export default About;
