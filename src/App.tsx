import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";
import { ThemeProvider } from "./data/getTheme";
const Home = lazy(() => import("./pages/home"));
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>{" "}
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
