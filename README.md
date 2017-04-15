# mctext-react

[![Greenkeeper badge](https://badges.greenkeeper.io/TeamWertarbyte/mctext-react.svg)](https://greenkeeper.io/)

This library allows you to display text with Minecraft formatting. It supports [JSON (component-based) text][mc-text-component] as well as [strings with formatting codes][mc-formatting].  
Obfuscated text is also supported and will behave as it does ingame.

## Installation
```
npm i --save mctext-react
```

## Usage
```jsx
import McText from 'mctext-react'

<McText>§4red §lbold red §r§kobfuscated</McText>
<McText>
  {{
    text: '',
    extra: [
      {
        text: 'red ',
        color: 'dark_red'
      },
      {
        text: 'bold red ',
        bold: true,
        color: 'dark_red'
      },
      {
        text: 'obfuscated',
        obfuscated: true
      }
    ]
  }}
</McText>
```

## Properties
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children * | `string` or `object` | | The text to display, see above. |
| colormap | `object` | _see below_ | An alternate colormap used to map Minecraft colors to CSS colors. |
| randomChars | `string` | `A…Za…z0…9!§$%&?#` | Characters to use for obfuscated text. |
| style | `object` | | Override the style of the text. |

\* required property

### Colormap
The sixteen Minecraft colors are mapped to CSS colors by using a colormap. The [default colormap][default-colormap] uses the colors from the [Minecraft Wiki][mc-wiki-colors].

## Related projects
* [McTextBlock][McTextBlock] is a WPF component that displays Minecraft formatted text. It only supports strings with formatting codes.

[mc-formatting]: http://minecraft.gamepedia.com/Formatting_codes
[mc-text-component]: http://www.minecraftforum.net/forums/minecraft-discussion/redstone-discussion-and/351959-1-9-json-text-component-for-tellraw-title-books#Textinput
[default-colormap]: https://github.com/TeamWertarbyte/mctext-react/blob/master/src/defaultColormap.js
[mc-wiki-colors]: http://minecraft.gamepedia.com/Formatting_codes#Color_codes
[McTextBlock]: https://github.com/TeamWertarbyte/McTextBlock/

## License
The files included in this repository are licensed under the MIT license.
