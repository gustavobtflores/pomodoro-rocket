import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="success" />
    </ThemeProvider>
  );
}

export default App;
