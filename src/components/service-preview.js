import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './service-preview.module.scss'

export default ({ service }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={service.thumbnail.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/services/${service.slug}`}>{service.service}</Link>
    </h3>
    <p>{service.shortDescription}</p>
  </div>
)
