import React from "react"
import Footer from './footer'
import Header from './header'
import Head from './head'
import '../styles/index.css'
import layoutStyles from '../styles/layout.module.css'

const Layout = (props) => {
  return (
    <>
    <Head pageTitle={props.page}/>
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
    </>
  )
}

export default Layout;
