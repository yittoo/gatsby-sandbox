import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      This is an about page
      <Link to="Contact">Contact me</Link>
    </Layout>
  )
}

export default About
