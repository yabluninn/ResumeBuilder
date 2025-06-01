import "../src/styles/App.css";
import GeneratePage from "./components/layout/GeneratePage";
import Header from "./components/layout/Header";
import MainPage from "./components/layout/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/generate" element={<GeneratePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
