declare module 'mctext-react' { 
  interface Props {
    children: string | object
    colormap?: {
      black: string
      dark_blue: string
      dark_green: string
      dark_aqua: string
      dark_red: string
      dark_purple: string
      gold: string
      gray: string
      dark_gray: string
      blue: string
      green: string
      aqua: string
      red: string
      light_purple: string
      yellow: string
      white: string
    }
    randomChars?: string
    prefix?: string
    style?: object
  }
  
  function McText (props: Props): JSX.Element;
  export default McText 
}