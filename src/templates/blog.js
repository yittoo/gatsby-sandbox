import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout"
import Head from "../components/Head"

// export const query = graphql`
//   query markdownRemark($slug: String) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query contentfulBlogPost($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD.MM.YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const { fields } = node.data.target;
        const alt = fields.title["en-US"], 
              url = fields.file["en-US"].url
        return <img src={url} alt={alt}></img>
      }
    }
  }
  const { title, publishedDate, body } = props.data.contentfulBlogPost
  const blogBody = documentToReactComponents(body.json, options)
  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {blogBody}
    </Layout>
  )
}

export default Blog
