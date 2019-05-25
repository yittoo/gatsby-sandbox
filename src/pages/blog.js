import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import classes from "./blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const dataToRender = data.allMarkdownRemark.edges.map(edge => {
    const { title, date } = edge.node.frontmatter
    const { slug } = edge.node.fields
    return (
      <li className={classes.Post}>
        <Link to={`/blog/${slug}`}>
          <h2>{title}</h2>
          <p>{date}</p>
        </Link>
      </li>
    )
  })
  return (
    <Layout>
      <ol className={classes.Posts}>{dataToRender}</ol>
    </Layout>
  )
}

export default Blog
