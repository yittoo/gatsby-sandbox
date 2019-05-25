import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import classes from "./blog.module.scss"
import Head from "../components/Head"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD.MM.YYYY")
          }
        }
      }
    }
  `)

  const dataToRender = data.allContentfulBlogPost.edges.map(edge => {
    const { title, publishedDate, slug } = edge.node
    return (
      <li className={classes.Post} key={slug}>
        <Link to={`/blog/${slug}`}>
          <h2>{title}</h2>
          <p>{publishedDate}</p>
        </Link>
      </li>
    )
  })
  return (
    <Layout>
      <Head title="Blog" />
      <ol className={classes.Posts}>{dataToRender}</ol>
    </Layout>
  )
}

export default Blog
