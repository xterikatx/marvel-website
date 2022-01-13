import "./index.css";
import "./lib/font-awesome/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Search } from "./pages/Search";
import { MyMapComponent } from "./pages/Maps";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route exact path="/select-comic" element={<MyMapComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
