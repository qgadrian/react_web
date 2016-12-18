import React from 'react'
import Tweet from 'react-tweet'
import './TwitterWidget.scss'

const fetch = require('node-fetch')

export default class TwitterWidget extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      tweets: []
    }
  }

  parseTweets (jsonTweets) {
    const self = this

    jsonTweets.statuses.forEach(function (jsonTweet) {
      self.setState({
        tweets: [...self.state.tweets, jsonTweet]
      })
    })
  }

  getPlaceHolder () {
    return (
      <span>Loading tweet...</span>
    )
  }

  getTweets () {
    return this.state.tweets.map((tweet) => <Tweet key={tweet.id} data={tweet} />)
  }

  componentDidMount () {
    const self = this

    fetch(window.location.origin + '/tweets?search=' + self.props.searchText)
      .then(function (res) {
        return res.text()
      }).then(function (body) {
        self.parseTweets(JSON.parse(body))
      })
  }

  render () {
    // console.log(this.state.tweets)
    return (
      <div className='tweets'>
        <a className='twitter-timeline' />
        {this.getTweets()}
      </div>
    )
  }
}

TwitterWidget.propTypes = {
  searchText: React.PropTypes.string.isRequired
}
