import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

class ServiceTemplate extends React.Component {
  render() {
    const service = get(this.props, 'data.contentfulService')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={`${service.service} - ${siteTitle}`} />
          <div className="hero">
            <Img alt={service.title} fluid={service.thumbnail.fluid} />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{service.service}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {service.shortDescription}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: service.longContent.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default ServiceTemplate

export const pageQuery = graphql`
  query ServiceBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulService(slug: { eq: $slug }) {
      service
      slug
      shortDescription
      thumbnail {
        fluid(resizingBehavior: SCALE) {
          tracedSVG
        }
      }
      longContent {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
