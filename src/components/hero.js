import React from 'react'
import Img from 'gatsby-image'
//import {Container, Row, Col, Button } from 'react-bootstrap'

export default ({ data }) => (

  <div className="hero">

    <div className="container">
    	<div className="row">
    		<div className="col-12 col-lg-6">
    			<Img className="heroImage" alt={data.name} fluid={data.heroImage.fluid} />
    		</div>
    		<div className="col-12 col-lg-6">
	    		<div className="heroContent">
	    			<h2>Sealcoating 2.0</h2>
	    			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum voluptates repellat maiores eius nobis omnis culpa, at quidem mollitia neque consequuntur aut, alias vitae assumenda debitis rerum recusandae, fugiat excepturi.</p>
	    			<div>
		    			<a href="#" className="btn btn-secondary mr-2">Primary</a>
						  <a href="#" className="btn btn-secondary">Secondary</a>
	    			</div>
	    		</div>
    		</div>
    	</div>
    </div>
  </div>
)
