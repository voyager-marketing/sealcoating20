import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import { Container, Navbar, Nav, Button } from "react-bootstrap"

export default (pageInfo) => {

    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "sealcoating-logo.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
      <Navbar id="site-navbar" collapseOnSelect expand="lg" bg="light" variant="light">
        {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="navigation">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/services/">Services</Nav.Link>
                <Nav.Link href="/blog/">Blog</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
          </Nav>

          <Img className="brand" fixed={data.file.childImageSharp.fixed} />

          <Nav className="navigation">
                <Nav.Link href="/request-quote/">Request a Quote</Nav.Link>
                <Nav.Link href="/contact/">Contact Us</Nav.Link>
                <Nav.Link href="tel:540-809-1502">(540) 809-1502</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
  )
}