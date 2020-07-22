import React from "react";
import {Link, graphql, useStaticQuery} from 'gatsby';
import headerStyles from '../styles/header.module.css'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
        <h1>
            <Link className={headerStyles.title} to="/">
                        {data.site.siteMetadata.title}
                    </Link>
        </h1>
        
        <ul  className={headerStyles.nav}>
          <li>
          <Link activeClassName={headerStyles.active} className={headerStyles.navItem} to="/">
            Home
          </Link>
          </li>
          <li>
            <Link activeClassName={headerStyles.active} className={headerStyles.navItem}  to="/about">
            About
            </Link>
          </li>
          <li>
            <Link activeClassName={headerStyles.active} className={headerStyles.navItem}  to="/blog">
            Blog
            </Link>
          </li>
          <li>
            <Link activeClassName={headerStyles.active} className={headerStyles.navItem}  to="/contact">
            Contact
            </Link>
          </li>
        </ul>

    </header>
  )
}

export default Header;
