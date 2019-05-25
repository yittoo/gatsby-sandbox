import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      This is an about page
      <Link to="/contact">Contact me</Link>
    </Layout>
  )
}

export default About
