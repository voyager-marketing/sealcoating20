import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import ServicePreview from '../components/service-preview'

class ServiceIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const allServices = get(this, 'props.data.allContentfulService.edges')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Our Services</h2>
            <ul className="service-list">
              {allServices.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ServicePreview service={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ServiceIndex

export const pageQuery = graphql`
  query ServiceIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulService {
      edges {
        node {
          service
          slug
          shortDescription
          thumbnail {
            fluid(resizingBehavior: SCALE) {
             ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
