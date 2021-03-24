import RouterComponent from "./routes/router";
import { ThemeProvider } from "@material-ui/core/styles";
import {theme} from './Theme/Theme'

function App() {
  

  return (
    <div>   
      <ThemeProvider theme={theme}>
        <RouterComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
