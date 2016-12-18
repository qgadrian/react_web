import React from 'react'
import Translate from 'react-translate-component'
import TwitterWidget from '../../../components/TwitterWidget/TwitterWidget'
import './HomeView.scss'

export const HomeView = () => (
  <div id='home'>
    <div className='title'>
      <h1 className='title'>
        <Translate className='subtitle' content='home.title' fallback='#Welcome!#' />
      </h1>
    </div>
    <div className='twitter'>
      <span className='title'>#meatishealthy</span>
      <TwitterWidget searchText='meat is healthy' />
    </div>
  </div>
)

export default HomeView
