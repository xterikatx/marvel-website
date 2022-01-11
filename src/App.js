import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Search } from './pages/Search';
import './lib/font-awesome/css/all.min.css';
function App() {
  return (
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Search/>} />
        </Routes>
      </Router>
  );
}

export default App;
