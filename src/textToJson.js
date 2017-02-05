const colorMap = {
  '0': 'black',
  '1': 'dark_blue',
  '2': 'dark_green',
  '3': 'dark_aqua',
  '4': 'dark_red',
  '5': 'dark_purple',
  '6': 'gold',
  '7': 'gray',
  '8': 'dark_gray',
  '9': 'blue',
  'a': 'green',
  'b': 'aqua',
  'c': 'red',
  'd': 'light_purple',
  'e': 'yellow',
  'f': 'white'
}

export default function convertTextToJson (text) {
  const component = { text: '', extra: [] }
  const re = /§[0-9a-fklmnor]/gm

  const unformattedText = text.replace(re, '')

  let currentFormattings = {}

  let i = 0
  let lastPos = 0
  let match
  while ((match = re.exec(text)) != null) {
    i++
    const realIndex = match.index - 2 * i + 2
    const doneText = unformattedText.substring(lastPos, realIndex)
    if (doneText.length > 0) {
      component.extra.push({
        ...currentFormattings,
        text: doneText
      })
    }

    switch (match[0][1]) {
      case 'k':
        currentFormattings.obfuscated = true
        break
      case 'l':
        currentFormattings.bold = true
        break
      case 'm':
        currentFormattings.strikethrough = true
        break
      case 'n':
        currentFormattings.underlined = true
        break
      case 'o':
        currentFormattings.italic = true
        break
      case 'r':
        currentFormattings = {}
        break
      default: // color code (resets preceding format codes)
        currentFormattings = {
          color: colorMap[match[0][1]]
        }
        break
    }

    lastPos = realIndex
  }

  component.extra.push({
    ...currentFormattings,
    text: unformattedText.substring(lastPos)
  })

  return component
}
