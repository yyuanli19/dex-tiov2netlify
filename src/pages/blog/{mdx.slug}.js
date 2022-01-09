
import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
  return (
      <Layout pageTitle={data.mdx.frontmatter.name}>
        <p>{data.mdx.frontmatter.datePublished}</p>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        name
        datePublished(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost
