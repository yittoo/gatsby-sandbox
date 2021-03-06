import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

const Index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello,</h1>
      <h2>Some stuff</h2>
      <p>
        Need a dev? <Link to="/contact">Contact</Link>
      </p>
    </Layout>
  )
}

export default Index
