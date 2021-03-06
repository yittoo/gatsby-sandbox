const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    const slug = edge.node.slug
    /**
     * @param {String} - component - absolute path to template
     * @param {String} - (output) path - uses slug created
     * @param {Object} - context - gives context with slug name
     */
    createPage({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: {
        slug,
      },
    })
  })
}

// code below was used to create slug from files

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNode, createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")
//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

// code below was used to read slugs from files and create pages accordingly

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogTemplate = path.resolve("./src/templates/blog.js")
//   const res = await graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//   res.data.allMarkdownRemark.edges.forEach(edge => {
//     const slug = edge.node.fields.slug
//     /**
//      * @param {String} - component - absolute path to template
//      * @param {String} - (output) path - uses slug created
//      * @param {Object} - context - gives context with slug name
//      */
//     createPage({
//       component: blogTemplate,
//       path: `/blog/${slug}`,
//       context: {
//         slug,
//       },
//     })
//   })
// }
