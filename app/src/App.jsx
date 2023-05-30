import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
import Testimonial from "./Testimonial"

const theme = {
  colors: {
    darkBlue: 'hsl(240, 38%, 20%)',
    grayishBlue: 'hsl(240, 18%, 77%)',
    lightGrayishBlue: 'hsl(240, 20.000000000000068%, 95.09803921568627%)'

  },
  desktop: '1440px'
}
function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Testimonial />
    </ThemeProvider>
  )
}

export default App
