import React from 'react'
import Service from './Service'
import './Services.scss'

export const Services = (props) => (
  <div className='services'>
    <div className='main'>
      <Service key='service_1' serviceNumber={1} />
      <Service key='service_2' serviceNumber={2} />
      <Service key='service_3' serviceNumber={3} />
    </div>
    <div className='featured'>
      <Service key='service_4' serviceNumber={4} imageUrl='http://lorempixel.com/400/200/food/' />
      <Service key='service_5' serviceNumber={5} imageUrl='http://lorempixel.com/400/200/food/' />
      <Service key='service_6' serviceNumber={6} imageUrl='http://lorempixel.com/400/200/food/' />
      <Service key='service_7' serviceNumber={7} imageUrl='http://lorempixel.com/400/200/food/' />
    </div>
  </div>
)

export default Services
