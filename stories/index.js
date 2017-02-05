import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import McText from '../src/McText'

storiesOf('McText', module)
  .add('from JSON', () => (
    <McText>
      {{'text': '', 'extra': [{'color': 'dark_red', 'text': 'Wirtschafts-Server mit RPG und klarem Konzept '}, {'color': 'green', 'text': '| '}, {'color': 'dark_red', 'text': 'SKY-Server '}, {'color': 'green', 'text': '| '}, {'color': 'dark_red', 'text': 'Minigames '}, {'color': 'green', 'text': '| '}, {'color': 'dark_red', 'text': 'Creative '}, {'color': 'green', 'text': '| '}, {'color': 'red', 'text': 'Community von 8 - 66 Jahren '}, {'color': 'green', 'text': '| '}, {'color': 'dark_red', 'text': 'Aktive Admins'}]}}
    </McText>
  ))
  .add('from JSON, with obfuscated text', () => (
    <McText>
      {{'text': '', 'extra': [{'color': 'dark_red', 'obfuscated': true, 'text': 'Wirtschafts-Server mit RPG und klarem Konzept'}, {'color': 'green', 'text': ' | '}, {'color': 'dark_red', 'text': 'SKY-Server '}, {'color': 'green', 'text': '| '}, {'color': 'dark_red', 'text': 'Minigames '}, {'color': 'green', 'text': '| '}, {'color': 'dark_red', 'text': 'Creative '}, {'color': 'green', 'text': '| '}, {'color': 'red', 'text': 'Community von 8 - 66 Jahren '}, {'color': 'green', 'text': '| '}, {'color': 'dark_red', 'text': 'Aktive Admins'}]}}
    </McText>
  ))
  .add('from JSON, with string extra values', () => (
    <McText>
      {{ text: 'This ', 'extra': ['works ', { color: 'red', text: 'great!' }] }}
    </McText>
  ))
  .add('from string', () => (
    <McText>
      §4This is red and this is §ksecret§r and §lbold. Note that §9color codes reset format codes, as you §ocan see.
    </McText>
  ))
