/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import McText from './McText'

// mock Math.random to a deterministic random generator
Math.random = jest.fn((() => {
  let x = 0
  return () => {
    x += 0.1
    if (x >= 1) {
      x = 0
    }
    return x
  }
})())

test('Formatting codes text renders properly', () => {
  const tree = renderer.create(
    <McText>§4This is red and this is §ksecret§r and §lbold. Note that §9color codes reset format codes, as you §ocan see.</McText>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Formatting codes text with custom prefix renders properly', () => {
  const tree = renderer.create(
    <McText prefix={'&'}>{'&4This is red and this is &ksecret&r and &lbold. Note that &9color codes reset format codes, as you &ocan see.'}</McText>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('JSON text component renders properly', () => {
  const tree = renderer.create(
    <McText>
      {{'text': '', 'extra': [{'color': 'dark_red', 'obfuscated': true, 'text': 'Wirtschafts-Server mit RPG und klarem Konzept'}, {'color': 'green', 'text': ' | '}, {'color': 'dark_red', 'text': 'SKY-Server '}, {'color': 'green', 'text': '| '}, {'color': 'dark_red', 'text': 'Minigames '}, {'color': 'green', 'text': '| '}, {'color': 'dark_red', 'text': 'Creative '}, {'color': 'green', 'text': '| '}, {'color': 'red', 'text': 'Community von 8 - 66 Jahren '}, {'color': 'green', 'text': '| '}, {'color': 'dark_red', 'text': 'Aktive Admins'}]}}
    </McText>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('JSON text component with string extra components renders properly', () => {
  const tree = renderer.create(
    <McText>
      {{ text: 'This ', 'extra': ['works ', { color: 'red', text: 'great!' }] }}
    </McText>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
