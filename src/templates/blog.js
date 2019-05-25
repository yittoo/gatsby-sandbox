import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

export const query = graphql`
  query markdownRemark($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  const { html, frontmatter } = props.data.markdownRemark
  const { title, date } = frontmatter
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default Blog
