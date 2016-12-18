import React, { PropTypes } from 'react'
import Image from '../../../components/Image/Image'

function getImage (url) {
  if (url) {
    return (
      <Image url={url} />
    )
  }
}

export const Service = (props) => (
  <div className='service '>
    {getImage(props.imageUrl)}
    <span className='title'>Lorem Ipsum</span>
    <span className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum ex id faucibus ornare. Donec vehicula et sem a luctus. Etiam et magna elementum, congue est ut, dignissim sem. Aliquam eget sodales nisl.</span>
  </div>
)

Service.propTypes = {
  serviceNumber: PropTypes.number,
  imageUrl: PropTypes.string
}

export default Service
