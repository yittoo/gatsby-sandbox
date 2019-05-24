import React from "react"

import Header from "./Header"
import Footer from "./Footer"
import "../styles/index.scss"
import classes from "./Layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={classes.Layout}>
      <div className={classes.Content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
