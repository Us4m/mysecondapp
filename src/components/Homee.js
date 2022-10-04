import React from 'react'
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Footer from './Footer';
import Container from './Container';
import PropTypes from 'prop-types'

export default function (props) {
  return (
    <div>
    <Navbar  title="Mobile base"/>
    <Container/>
    <Newsletter/>
    <Footer title="Mobile base"/> 
    </div>
  )
}
