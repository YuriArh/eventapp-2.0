import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Auth from "./views/Auth";
import { Routes, Route } from "react-router-dom";

const defaultTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `linear-gradient( 111.4deg,  rgba(231, 127, 103,1.0) 1%, rgba(247, 215, 148,1.0) 58% )`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#e15f41",
      // main: "#e66767",
    },
    secondary: {
      main: "#ff7675",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
