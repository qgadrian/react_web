import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div id='container'>
    <Header />
    <div id='content'>
      {children}
    </div>
    <Footer />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
