import React from "react"

import Layout from "../components/Layout"
import Head from "../components/Head"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      This is contact page{" "}
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        To Google
      </a>
    </Layout>
  )
}

export default Contact
