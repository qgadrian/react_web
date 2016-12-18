import React from 'react'
import Translate from 'react-translate-component'

export const Footer = () => (
  <div id='footer'>
    <Translate content='footer.address' className='address' />
    <Translate content='footer.phone' className='phone' />
    <Translate content='footer.email' className='email' />
  </div>
)

export default Footer
