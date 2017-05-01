import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ObfuscatedText extends Component {
  generateText () {
    let randomString = ''
    for (let i = 0; i < this.props.text.length; i++) {
      randomString += this.props.randomChars[Math.floor(Math.random() * this.props.randomChars.length)]
    }
    return randomString
  }

  animate = () => {
    if (this.span && this.span.innerText) {
      this.span.innerText = this.generateText()
      window.requestAnimationFrame(this.animate)
    }
  }

  setSpan = (span) => {
    if (this.span == null && span != null) {
      this.span = span
      this.animate()
    } else {
      this.span = span
    }
  }

  render () {
    return <span ref={this.setSpan}>{this.generateText()}</span>
  }
}

ObfuscatedText.propTypes = {
  randomChars: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
