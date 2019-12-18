import React from "react"
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default ({data}) => (
	<Layout>
	  <div>
	    <h1>I'd love to talk! Email me at the address below </h1>
	    <p>
	      <a href="mailto:me@example.com">me@example.com</a>
	    </p>
	  </div>
	 </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`