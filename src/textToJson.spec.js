/* eslint-env jest */
import convertTextToJson from './textToJson'

describe('textToJson', () => {
  it('converts text with formatting to json', () => {
    expect(convertTextToJson('§ksecret')).toEqual({
      text: '',
      extra: [{ obfuscated: true, text: 'secret' }]
    })
    expect(convertTextToJson('§mstrikethrough')).toEqual({
      text: '',
      extra: [{ strikethrough: true, text: 'strikethrough' }]
    })
    expect(convertTextToJson('§nunderlined')).toEqual({
      text: '',
      extra: [{ underlined: true, text: 'underlined' }]
    })
    expect(convertTextToJson('§ounderlined')).toEqual({
      text: '',
      extra: [{ italic: true, text: 'underlined' }]
    })
    expect(convertTextToJson('§n§rnot formatted')).toEqual({
      text: '',
      extra: [{ text: 'not formatted' }]
    })
  })

  it('converts text with color to json', () => {
    expect(convertTextToJson('§cRoses are red, §9violets are blue.')).toEqual({
      text: '',
      extra: [{ color: 'red', text: 'Roses are red, ' }, { color: 'blue', text: 'violets are blue.' }]
    })
  })

  it('resets the format when a color code is used', () => {
    expect(convertTextToJson('§lbold §4dark red but not bold')).toEqual({
      text: '',
      extra: [{ bold: true, text: 'bold ' }, { color: 'dark_red', text: 'dark red but not bold' }]
    })
  })

  it('resets the formatting and color when §r is used', () => {
    expect(convertTextToJson('§d§mstrike this §rokay')).toEqual({
      text: '',
      extra: [{ strikethrough: true, color: 'light_purple', text: 'strike this ' }, { text: 'okay' }]
    })
  })
})
