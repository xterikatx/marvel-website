import "./index.css";
import "./lib/font-awesome/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Search } from "./pages/Search";
import { MyMapComponent } from "./pages/Maps";
import { GlobalProvider } from "./context/GlobalState";
import { Favs } from "./pages/Favs";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route exact path="/select-comic" element={<MyMapComponent />} />
          <Route exact path="/favs" element={<Favs />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
