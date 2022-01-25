import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
         data.allMdx.nodes.map((node) => (
           <article key={node.id}>
           <h2>
                <Link to={`/blog/${node.slug}`}>
                  {node.frontmatter.name}
                </Link>
              </h2>
             <p>Posted: {node.frontmatter.datePublished}</p>
           </article>
         ))
       }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___datePublished, order: DESC}) {
      nodes {
        frontmatter {
        datePublished(formatString: "MMMM D, YYYY")
        name
        }
        id
        slug
      }
    }
  }
`


export default BlogPage
