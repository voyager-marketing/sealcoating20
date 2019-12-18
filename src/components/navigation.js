import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Navbar, Nav, Button } from "react-bootstrap"
import styles from './navigation.module.scss'

export default (pageInfo) => {

    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "sealcoating-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // const fluidImage = graphql`
  //   fragment fluidImage on File {
  //     childImageSharp {
  //       fluid(maxWidth: 1000) {
  //         ...GatsbyImageSharpFluid
  //       }
  //     }
  //   }
  // `;

  return (
    <Navbar collapseOnSelect variant="light" expand="lg" id="site-navbar" role="navigation">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-lg-5">
                <Nav className={styles.navigation + " mr-auto"}>
                  <ul>
                    <li className={styles.navigationItem}>
                      <Nav.Link href="/">Home</Nav.Link>
                    </li>
                    <li className={styles.navigationItem}>
                      <Nav.Link href="/services/">Services</Nav.Link>
                    </li>
                    <li className={styles.navigationItem}>
                      <Nav.Link href="/blog/">Blog</Nav.Link>
                    </li>
                  </ul>
                </Nav>
              </div>
              <div className="col-12 col-lg-2">
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>
              <div className="col-12 col-lg-5">
                <Nav className={styles.navigation + " mr-auto justify-content-end"}>
                  <ul>
                    <li className={styles.navigationItem}>
                      <Nav.Link href="/about">About</Nav.Link>
                    </li>
                    <li className={styles.navigationItem}>
                      <Nav.Link href="/contact/">Contact Us</Nav.Link>
                    </li>
                    <li className={styles.navigationItem}>
                      <Nav.Link href="/request-quote/">Request a Quote</Nav.Link>
                    </li>
                  </ul>
                </Nav>
              </div>
            </div>
          </div>
      </Navbar.Collapse>
    </Navbar>
  )
}