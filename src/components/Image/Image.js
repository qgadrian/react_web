import React, { PropTypes } from 'react'
import ImageLoader from 'react-imageloader'

export const Image = (props) => (
  <ImageLoader
    src={props.url}
    wrapper={React.DOM.div}
    preloader={Preloader}>
    Image load failed!
  </ImageLoader>
)

Image.propTypes = {
  url: PropTypes.string.isRequired
}

const Preloader = () => (
  <div className='loading'>
    <span>Loading...</span>
  </div>
)

export default Image
