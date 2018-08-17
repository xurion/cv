import React, {Component} from 'react'
import portraitImage from './images/me.png'

export default class Portrait extends Component {
  render() {
    return <img className="img-fluid profile-pic" src={portraitImage} alt="Dean James"/>
  }
}
