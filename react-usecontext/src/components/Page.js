import React from "react"
import {ThemeContext} from "../contexts/theme-context";

function Page() {
  const theme = React.useContext(ThemeContext)
  return(
    <div style={{background: theme.background, color: theme.textColor,}}>
      Page
    </div>
  )
}

export default Page