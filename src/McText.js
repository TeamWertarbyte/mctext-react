import React from 'react'
import PropTypes from 'prop-types'
import defaultColormap from './defaultColormap'
import convertTextToJson from './textToJson'
import TextComponent from './TextComponent'
import { isString } from './util'

export default function McText (props) {
  const {
    prefix,
    children,
    colormap,
    randomChars,
    style,
    ...other
  } = props

  const component = isString(children) ? convertTextToJson(children, prefix) : children

  return (
    <span
      {...other}
      style={{ fontFamily: 'monospace', ...style }}
    >
      <TextComponent
        colormap={colormap}
        component={component}
        randomChars={randomChars}
      />
    </span>
  )
}

McText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  colormap: PropTypes.shape({
    black: PropTypes.string,
    dark_blue: PropTypes.string,
    dark_green: PropTypes.string,
    dark_aqua: PropTypes.string,
    dark_red: PropTypes.string,
    dark_purple: PropTypes.string,
    gold: PropTypes.string,
    gray: PropTypes.string,
    dark_gray: PropTypes.string,
    blue: PropTypes.string,
    green: PropTypes.string,
    aqua: PropTypes.string,
    red: PropTypes.string,
    light_purple: PropTypes.string,
    yellow: PropTypes.string,
    white: PropTypes.string
  }),
  randomChars: PropTypes.string,
  prefix: PropTypes.string,
  style: PropTypes.object
}

McText.defaultProps = {
  prefix: '§',
  colormap: defaultColormap,
  randomChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!§$%&?#'
}
