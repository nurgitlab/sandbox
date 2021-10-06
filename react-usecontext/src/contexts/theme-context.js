import {createContext} from "react"

export const themes = {
  light: {
    background: "#eeeeee",
    textColor: "#444444",
  },
  dark: {
    background: "#444444",
    textColor: "#eeeeee",
  }
}

export const ThemeContext = createContext(themes.light)