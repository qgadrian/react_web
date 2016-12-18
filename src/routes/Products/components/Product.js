import React, { PropTypes } from 'react'
import Image from '../../../components/Image/Image'

export const Product = (props) => (
  <div className='product'>
    {getImage(props.imageUrl)}
    <span className='title'>{props.title}</span>
    <span className='description'>{props.description}</span>
  </div>
)

Product.propTypes = {
  productNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
}

function getImage (url) {
  if (url) {
    return (
      <Image url={url} />
    )
  }
}

export default Product
