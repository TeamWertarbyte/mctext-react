import React, { PropTypes } from 'react'
import ObfuscatedText from './ObfuscatedText'
import { isString } from './util'

function getStyle (colormap, { color, bold, italic, underlined, strikethrough }) {
  return {
    color: color && colormap[color],
    fontWeight: bold && 'bold',
    fontStyle: italic && 'italic',
    textDecoration: (underlined || strikethrough) && `${underlined ? 'underline' : ''} ${strikethrough ? 'line-through' : ''}`
  }
}

export default function TextComponent ({ colormap, component, randomChars, obfuscated }) {
  if (isString(component)) {
    return obfuscated ? (
      <ObfuscatedText
        colormap={colormap}
        text={component}
        randomChars={randomChars}
      />
    ) : <span>{component}</span>
  } else {
    return (
      <span
        style={getStyle(colormap, component)}
      >
        {component.obfuscated || (obfuscated && component.obfuscated !== false) ? (
          <ObfuscatedText
            colormap={colormap}
            text={component.text}
            randomChars={randomChars}
          />
        ) : component.text}
        {component.extra && component.extra.map((extra, i) => (
          <TextComponent
            key={i}
            colormap={colormap}
            component={extra}
            obfuscated={component.obfuscated}
            randomChars={randomChars}
          />
        ))}
      </span>
    )
  }
}

TextComponent.propTypes = {
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
  }).isRequired,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  obfuscated: PropTypes.bool,
  randomChars: PropTypes.string.isRequired
}
