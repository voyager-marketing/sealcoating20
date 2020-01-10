import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ service }) => (
  <div className="preview">
    <Img alt="" fluid={service.thumbnail.fluid} />
    <h3 className="previewTitle">
      <Link to={`/services/${service.slug}`}>{service.service}</Link>
    </h3>
    <p>{service.shortDescription}</p>
  </div>
)
