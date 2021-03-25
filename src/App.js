import { Provider } from "react-redux";
import RouterComponent from "./routes/router";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme/Theme";
import Store from "./Store";

function App() {
  return (
    <div>
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <RouterComponent />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
