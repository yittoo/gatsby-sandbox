import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import classes from "./Header.module.scss"

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
    <header className={classes.Header}>
      <h1>
        <Link className={classes.Title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <ul className={classes.navList}>
        <li>
          <Link
            activeClassName={classes.activeNavItem}
            className={classes.navItem}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClassName={classes.activeNavItem}
            className={classes.navItem}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClassName={classes.activeNavItem}
            className={classes.navItem}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            activeClassName={classes.activeNavItem}
            className={classes.navItem}
            to="/blog"
          >
            Blog
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
