import * as React from "react"
import { gatsbyImageData, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../components/styles/Global'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from '../components/styles/Container.styled'
import Card from '../components/Card'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

// Step 2: Define your component
const IndexPage = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
        <Header />
          <Container>
          {data.allMdx.nodes.map((node) =>  (
            <Card key={node.id} item={node.frontmatter} />
            ))}
          </Container>
        <Footer />
        </>
        </ThemeProvider>
  )
}

export const query = graphql`
  query {
    allMdx(filter: {frontmatter: {tag: {in: "demo"}}}
    sort: {order: ASC, fields: frontmatter___id}
    ) {
      nodes {
        frontmatter {
          id
          title
          body
          hero_image {
            base
            }
        }
        id
      }
    }
  }
`




export default IndexPage
